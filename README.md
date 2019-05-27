
# NYTimes App

*A News Article app using react native for iOS & Android*

## Installation

**Step 1:** clone my repo & cd into project

**Step 2:** Install Node 
https://nodejs.org/en/download/

**Step 3:** Configure React Native

```
npm install -g react-native-cli

```
**Step 4:** Install node modules

```
npm install

```


*Before run android build, setup [Android Studio](https://facebook.github.io/react-native/docs/android-setup.html)*

**Step 3:** If Android

```
react-native run-android
```

*Before running iOS build, Install [Xcode](https://developer.apple.com/xcode/download/)*

**Step 4:** If iOS

```
react-native run-ios
```

If you want to install app in the device, connect your device to the system with debugger mode on and run the above command (app will be installed automatically)

## Getting the test coverage
 ```
npm test
```
Coverage can be found output\coverage\jest\index.html

## Steps to configure the NYTimes API key

1) Create a .env file in the root directory of the application
2) Create a new variable called 'NYTimes_API_KEY'
3) Assign your api key to the above variable, as shown below

```
NYTimes_API_KEY = <API Key>
```

## Configuring IOS for API key
 Open your .xcodeproj. You’ll need to enabled a few things from within Xcode
1) Go to your Build Settings tab, search for “preprocess”, and set Preprocess Info.plist File to Yes.
2) Set Info.plist Preprocessor Prefix File to ${BUILD_DIR}/GeneratedInfoPlistDotEnv.h
3) Set Info.plist Other Preprocessor Flags to -traditional
4) In Xcode, next to the play & stop buttons, select your current scheme and then select “Manage Schemes”.
5) With the window open, select your current scheme then select the gear icon, then “Duplicate.”
6) Name your new scheme (I’m naming mine Dev). Then expand “Build” and click “Pre-actions”. Click the plus sign and then “New Run Script Action”.
7) Finally you wan to paste the following script into the box. Replace .env.dev with the appropriate file for the environment.
 ```
echo ".env.dev" > /tmp/envfile
```
## Configuring Android for API key

add one line to android/app/build.gradle, right after any other “apply”
```
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

