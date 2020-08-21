import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { Icon } from '@app/components'

const Button = ({title, onClick}) => {
    return <View style={styles.button}>
        <TouchableOpacity
            onPress={() => {
                onClick()
            }}
        >
            <LinearGradient
                colors={['#5db8fe', '#39cff2']}
                style={styles.signIn}
            >
                <Text style={styles.signInText}>{title}</Text>
                <Icon name="navigate-next" type="MaterialIcons" size={20} color="white" />
            </LinearGradient>

        </TouchableOpacity>

    </View>
}

export default Button