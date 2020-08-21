Record audio in iOS or Android React Native apps.

## SimpliBot App with audio recordings 

Voice Recorder for IOS and Android

# UNLIMITED RECORDINGS

Record for as long as you want and as many times as you want. (No restrictions as long as you have enough available storage on your device).

Recorder brings the power of search to audio recording. Meetings, lectures, band practices, family memories — anything you want to save and listen to later. Recorder automatically transcribes and labels what you record so you can easily find the parts that matter to you.


# Usuage

1. Login to the app with your email and password
2. Provide access to micro phone by clicking on create new record.
3. Record your audio, save with a name that you wish to.
4. Listen to the audio by clicking on the selected play button.

##  SimpliBot App (IOS)
Install xcode before hand
1. Clone repo
2. npm i at project level. Use sudo if permission denied error comes.
3. cd ios and gem install cocoapods
4. inside ios folder rm -rf Podfile.lock
5. then pod install
6. In project finder go inside ios directory of the project and open project_name..xcworkspace
file in xcode
7. Chose Product --> Clean in xcode top menu
8. Then run the application.

if error occurs after building and running on simulator regarding @react-native-community/async-storage
run yarn add @react-native-community/async-storage && react-native link @react-native-community/async-storage
for ios after that cd ios/ && pod install

##  SimpliBot App (Android)
1. Install android studio.
2. Download java.
3. Download gradle version, if any version is there set gradle path to this in .bash_profile
4. cd into project folder && android
5. run ./gradlew
6. Open Android studio , and import the android folder into Android studio

## Libraries

1. React-Redux to store the audio information
2. react-native-audio to record the audio
3. react-native-sound to play the audio
4. react-native-animatable used to play the animation for splash screen, login screen and while recording.
5. react-native-linear-gradient for a gradient effect for the buttons
6. react-native-modal to display modal information like recoding, playing, saving the file
7. react-native-permissions to get access for micro phone permission to record
8. react-native-vector-icons used to display icons 
9. react-navigation & react-navigation-stack used to navigate between screens 
10. redux-persist used to make the recording information persist even after the app is terminted

![Alt text](/App/assets/images/reference/splash.png?raw=true "Splash Scren")

![Alt text](/App/assets/images/reference/login.png?raw=true "Login Scren")

![Alt text](/App/assets/images/reference/emailcheck.png?raw=true "Login Email Check")

![Alt text](/App/assets/images/reference/emailcheckgreen.png?raw=true "Login Email Check Green")

![Alt text](/App/assets/images/reference/passwordhidden.png?raw=true "Login Password")

![Alt text](/App/assets/images/reference/passwordshow.png?raw=true "Login Password Show")

![Alt text](/App/assets/images/reference/microphoneacess.png?raw=true "Microphone access")

![Alt text](/App/assets/images/reference/microphonenotauthorized.png?raw=true "Microphone not authorized")

![Alt text](/App/assets/images/reference/recordings.png?raw=true "Recordings list")

![Alt text](/App/assets/images/reference/audioplayer.png?raw=true "Recordings list")







