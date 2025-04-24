// This is a testing script to manually set propeller speeds in Firebase
// Include this in your HTML after firebase-sync.js for testing purposes only

class PropellerSpeedTester {
    constructor() {
        this.database = firebase.database();
        this.currentSpeed = 0;
        this.increasing = true;
        
        // Create the propellerSpeeds node if it doesn't exist
        this.ensurePropellerNode().then(() => {
            // Start the animation once the node is confirmed to exist
            this.startAnimation();
        });
    }
    
    // Returns a promise that resolves when the node exists
    async ensurePropellerNode() {
        const snapshot = await this.database.ref('propellerSpeeds').once('value');
        if (!snapshot.exists()) {
            console.log('Creating propellerSpeeds node for testing');
            await this.database.ref('propellerSpeeds').set({
                propeller1: 0,
                propeller2: 0,
                propeller3: 0,
                propeller4: 0
            });
        }
        return true;
    }
    
    // Start an animation that gradually changes propeller speeds
    startAnimation() {
        console.log('Starting propeller speed test animation');
        
        // Update every 1 second
        setInterval(() => {
            // Increase or decrease speed
            if (this.increasing) {
                this.currentSpeed += 5;
                if (this.currentSpeed >= 100) {
                    this.currentSpeed = 100;
                    this.increasing = false;
                }
            } else {
                this.currentSpeed -= 5;
                if (this.currentSpeed <= 0) {
                    this.currentSpeed = 0;
                    this.increasing = true;
                }
            }
            
            // Update Firebase
            this.updatePropellerSpeeds(this.currentSpeed);
            
        }, 1000);
    }
    
    // Update the propeller speeds in Firebase
    updatePropellerSpeeds(speedPercentage) {
        console.log(`Setting test propeller speeds to ${speedPercentage}%`);
        this.database.ref('propellerSpeeds').update({
            propeller1: speedPercentage,
            propeller2: speedPercentage,
            propeller3: speedPercentage,
            propeller4: speedPercentage
        });
    }
}

// Initialize the tester when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure firebase-sync.js has initialized
    setTimeout(() => {
        // Check if we're in test mode (add ?test=true to URL to enable)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('test') === 'true') {
            console.log('TEST MODE ACTIVE: Propeller speed test animation will start');
            const tester = new PropellerSpeedTester();
        }
    }, 1000);
}); 