# Wordify
This is a React Native mobile application that allows users to play a word puzzle game. The application lets users select a category (e.g. animals, cities, food) and start a new game. The categories and words are retrieved from a web service as a JSON. Users can enter words by selecting the given letters on the screen to form the word. The letters of the word are shuffled and placed in the bottom part of the screen as boxes and the user can select letters by tapping on them. Users can earn points based on the length and complexity of the words they enter. The score can be submitted to an API using a POST request. Users can see the leaderboard of the highest scoring players, which comes from the API. Additionally, users can share their score on social media. The application is built to be performant and scalable, with a focus on maintainability and testability.

## Features
Select a category and start a new game
Enter words by selecting letters on the screen
Earn points based on the length and complexity of the words
Submit score to an API using a POST request
View the leaderboard of the highest scoring players
Share score on social media
Technology Stack:
- React Native
- Jest

## Installation
Clone the repository
Install the dependencies: `npm install`
Goto iOS folder: `cd ios`
Run pod install: `pod install`
Goto previous folder again: `cd ..`

## Build for iOS
Open the ios folder in Xcode.
Select your project in the left sidebar and then select the target you want to build.
Go to Product > Scheme > Edit Scheme.
Change the Build Configuration to Release.
Close the scheme editor and go to Product > Archive.
After the archive is created, click on Distribute App.
Follow the steps to export the app as an IPA file.

## Build for Android
Open the android folder in Android Studio.
In the Gradle sidebar, expand the project and then navigate to app > Tasks > build.
Double-click on assembleRelease.
After the build is complete, the APK file will be located in android/app/build/outputs/apk/release/app-release.apk.

## Running the app
To run the app on an iOS simulator, run the command: `npx react-native run-ios`
To run the app on an Android emulator, run the command: `npx react-native run-android`

## Testing
This project uses Jest for testing. To run the tests, use the command: `npm test`

## Contributing
Pull requests are welcome.

## License
