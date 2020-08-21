Record audio in iOS or Android React Native apps.

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


