// Firebase Sync Script for Airy Center Console
// This script syncs propeller data between Unity and the iPad console

class PropellerSync {
    constructor() {
        // Initialize Firebase Database reference
        this.database = firebase.database();
        
        // Create 'propellerSpeeds' node if it doesn't exist
        this.ensurePropellerNode();
        
        // Start listening to Unity propeller updates
        this.listenToUnityUpdates();
        
        console.log('PropellerSync initialized');
    }
    
    // Ensures the propellerSpeeds node exists in Firebase
    ensurePropellerNode() {
        this.database.ref('propellerSpeeds').once('value', (snapshot) => {
            if (!snapshot.exists()) {
                console.log('Creating propellerSpeeds node in Firebase');
                // Create with default values (all propellers at 0%)
                this.database.ref('propellerSpeeds').set({
                    propeller1: 0,
                    propeller2: 0,
                    propeller3: 0,
                    propeller4: 0
                }).then(() => {
                    console.log('PropellerSpeeds node created successfully');
                }).catch(error => {
                    console.error('Error creating propellerSpeeds node:', error);
                });
            } else {
                console.log('PropellerSpeeds node already exists');
            }
        }).catch(error => {
            console.error('Error checking propellerSpeeds node:', error);
        });
    }
    
    // Listen for Unity updates to propeller speeds
    listenToUnityUpdates() {
        // In Unity, we'll push the global speed percentage to Firebase
        // We're monitoring planeControls/speed since that's used in FirebasePlaneSync.cs
        this.database.ref('planeControls/speed').on('value', (snapshot) => {
            if (snapshot && snapshot.exists()) {
                const speedValue = snapshot.val();
                
                // Convert the speed value to percentage (0-100%)
                // This matches the calculation in CenterConsoleDisplay.cs
                const speedPercentage = Math.round(speedValue);
                
                // Update all propellers with the same percentage
                // This mirrors the behavior in CenterConsoleDisplay.cs where
                // all propellers show the same percentage
                this.updatePropellerSpeeds(speedPercentage);
                
                console.log(`Received speed update from planeControls: ${speedPercentage}%`);
            }
        }, (error) => {
            console.error('Error listening to planeControls/speed:', error);
        });
        
        // As a fallback, we'll also listen for direct updates to propellerSpeeds
        // This allows Unity to directly set individual propeller speeds if needed
        this.database.ref('propellerSpeeds').on('value', (snapshot) => {
            if (snapshot && snapshot.exists()) {
                const speed1 = snapshot.child('propeller1').val() || 0;
                const speed2 = snapshot.child('propeller2').val() || 0;
                const speed3 = snapshot.child('propeller3').val() || 0;
                const speed4 = snapshot.child('propeller4').val() || 0;
                
                console.log(`Direct propellerSpeeds update received: [${speed1}%, ${speed2}%, ${speed3}%, ${speed4}%]`);
            }
        }, (error) => {
            console.error('Error listening to propellerSpeeds:', error);
        });
    }
    
    // Update the propeller speeds in Firebase
    updatePropellerSpeeds(speedPercentage) {
        // Set all propellers to the same speed percentage
        this.database.ref('propellerSpeeds').update({
            propeller1: speedPercentage,
            propeller2: speedPercentage,
            propeller3: speedPercentage,
            propeller4: speedPercentage
        }).then(() => {
            console.log(`Updated all propeller speeds to ${speedPercentage}%`);
        }).catch(error => {
            console.error('Error updating propeller speeds:', error);
        });
    }
}

// Create Firebase structure for Unity integration
class UnityIntegration {
    constructor() {
        this.database = firebase.database();
        
        // Create any missing nodes that Unity might be expecting
        this.ensureFirebaseStructure();
        
        console.log('UnityIntegration initialized');
    }
    
    // Ensures all required Firebase nodes exist
    ensureFirebaseStructure() {
        // Check if planeControls exists, if not create it
        this.database.ref('planeControls').once('value', (snapshot) => {
            if (!snapshot.exists()) {
                console.log('Creating planeControls node in Firebase');
                this.database.ref('planeControls').set({
                    speed: 0,
                    altitude: 100
                }).then(() => {
                    console.log('PlaneControls node created successfully');
                }).catch(error => {
                    console.error('Error creating planeControls node:', error);
                });
            } else {
                console.log('PlaneControls node already exists');
            }
        }).catch(error => {
            console.error('Error checking planeControls node:', error);
        });
        
        // Check if routeStatus exists, if not create it
        this.database.ref('routeStatus').once('value', (snapshot) => {
            if (!snapshot.exists()) {
                console.log('Creating routeStatus node in Firebase');
                this.database.ref('routeStatus').set('idle').then(() => {
                    console.log('RouteStatus node created successfully');
                }).catch(error => {
                    console.error('Error creating routeStatus node:', error);
                });
            } else {
                console.log('RouteStatus node already exists');
            }
        }).catch(error => {
            console.error('Error checking routeStatus node:', error);
        });
    }
}

// Write initial speed directly to Firebase to ensure data is there
function writeInitialPropellerSpeeds() {
    console.log('Writing initial propeller speeds to Firebase');
    firebase.database().ref('propellerSpeeds').set({
        propeller1: 0,
        propeller2: 0,
        propeller3: 0,
        propeller4: 0
    }).then(() => {
        console.log('Initial propeller speeds written');
    }).catch(error => {
        console.error('Error writing initial propeller speeds:', error);
    });
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Firebase to be initialized in the main HTML
    if (typeof firebase !== 'undefined') {
        // Initial write to ensure data is present
        setTimeout(() => {
            writeInitialPropellerSpeeds();
        }, 500);
        
        // Create synchronization objects
        setTimeout(() => {
            const propellerSync = new PropellerSync();
            const unityIntegration = new UnityIntegration();
            
            console.log('Firebase sync initialized for center console');
        }, 1000);
    } else {
        console.error('Firebase not initialized. Make sure to include Firebase SDK.');
    }
}); 