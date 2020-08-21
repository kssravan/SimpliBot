import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Header, Icon } from '@app/components'
import { TouchableOpacity } from 'react-native'

import SplashScreen from '@app/containers/splash-container'
import LoginScreen from '@app/containers/login-container'
import HomeScreen from '@app/containers/home-container'

export default createAppContainer(createStackNavigator(
    {
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: {
                headershown: false,
            }
        },
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                headershown: false,
            }
        },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                headershown: false,
            }
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'SplashScreen',
        navigationOptions: ({ navigation }) => {
            return {
                headershown: false,
            }
        },
    }))