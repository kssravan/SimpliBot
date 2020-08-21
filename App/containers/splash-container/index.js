import React from 'react'
import { View, StatusBar, Text, TouchableOpacity } from 'react-native' 
import styles from './styles'
import { images } from '@app/themes'
import { Button } from '@app/components'
import * as Animatable from 'react-native-animatable'

const SplashScreen = (props) => {
    const {navigation} = props
    return <View style={styles.container}>
        <StatusBar barStyle='light-content' />  

        <View style={styles.header}>
            <Animatable.Image
                animation="bounceIn"
                duration={1500}
                source={images.Logo}
                style={styles.logo}
                resizeMode='stretch'
            />
        </View>
        <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={styles.title}>Meet SimpliBot</Text>
            <Text style={styles.text}>Unlock AI potential for your business.</Text>

            <Button
                title="Try SimpliBot"
                displayIcon={false}
                onClick={() => {
                    navigation.navigate("LoginScreen")
                }}
            />
        </Animatable.View>

    </View>
}

export default SplashScreen