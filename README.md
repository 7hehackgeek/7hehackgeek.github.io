# Airy Center Console Display

This is a web application designed to run on an iPad (11-inch) to serve as a center console display for the Airy aircraft. It shows propeller speeds and user information synced from Unity through Firebase.

## Setup Instructions

### Firebase Configuration

1. Open `index.html` and replace the Firebase configuration values with your own Firebase project details:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### Unity Integration

1. Add the `PropellerSpeedPublisher.cs` script (located in `Unity/Airy/Assets/Scripts/`) to a GameObject in your Unity scene.
2. Assign the required references in the Inspector:
   - `Enhanced Propeller Controller`
   - `Center Console Display` (optional)

### Setting up on iPad

1. Launch Safari on your iPad
2. Navigate to the URL where this application is hosted
3. Tap the Share button
4. Select "Add to Home Screen"
5. Name it "Airy Console" and tap "Add"
6. Launch the app from your home screen (it will run in full-screen mode)

## File Structure

- `index.html` - Main HTML file with display layout and Firebase setup
- `firebase-sync.js` - Handles data synchronization with Firebase
- `manifest.json` - Web app manifest for "Add to Home Screen" functionality
- `Images/` - Contains graphic assets for the display
  - `image 148.png` - Main aircraft image
  - `Vector.png` - Airy logo

## Database Structure

The application expects the following Firebase Realtime Database structure:

```
- propellerSpeeds
  - propeller1: 0-100 (percentage)
  - propeller2: 0-100 (percentage)
  - propeller3: 0-100 (percentage)
  - propeller4: 0-100 (percentage)
- userPreferences
  - name: "User's name"
- weather
  - temperature: "25"
  - condition: "Clear"
```

## Troubleshooting

If propeller data is not being updated:

1. Check the browser console for errors (connect iPad to computer and use Safari Developer Tools)
2. Verify your Firebase credentials are correct
3. Ensure the `PropellerSpeedPublisher.cs` script is properly attached in Unity
4. Confirm you have the right database structure in Firebase

## Resolution Notes

This display is optimized for iPad 11-inch. The layout may need adjustments for other screen sizes. 