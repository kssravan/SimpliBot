import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import styles from './styles'
import { Button, Icon } from '@app/components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'
import { NavigationService } from '@app/navigations'

const Login = (props) => {

    const {navigation} = props

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [securePassword, setsecurePassword] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(false)

    useEffect(() => {
        setIsValidEmail(validateEmail(username))
    }, [username]);

    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Buy your chat bot now.</Text>
        </View>

        <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={styles.textFooter}>E-mail</Text>
            <View style={styles.action}> 
                <Icon name="user-o" type="FontAwesome" size={20} color="#05375a" />
                <TextInput
                    value={username}
                    placeholder="Your email..."
                    style={styles.textInput}
                    onChangeText={(text) => {
                        setUsername(text)
                    }}
                />
                    <Animatable.View
                        animation="bounceIn"
                    >
                    <Icon name="check-circle" type="Feather" size={20} color={isValidEmail ? "green" : "gray"}/>
                </Animatable.View>
            </View>

            
            <Text style={[styles.textFooter, {marginTop:35}]}>Password</Text>
            <View style={styles.action}>
                <Icon name="lock" type="FontAwesome" size={20} color="#05375a" />
                <TextInput
                    value={password}
                    placeholder="Your password..."
                    style={styles.textInput}
                    secureTextEntry={securePassword}
                    onChangeText={(text) => {
                        setPassword(text)
                    }}
                />
                <TouchableOpacity onPress={() => setsecurePassword(!securePassword)}> 
                    <Icon name={securePassword ? "eye-off" : "eye"} type="Feather" size={20} color="gray" />
                </TouchableOpacity>
            </View>

            <Text style={{ marginTop: 15, }}>Forgot Password</Text>
            <Animatable.View
                animation="bounce"
            >
            <Button
                title="sign in"
                    onClick={() => {
                        if (!isValidEmail) {
                            Alert.alert('Notice', 'Please enter valid email address')
                        }
                        else if (password.length === 0) {
                            Alert.alert('Notice', 'Please enter your password')
                        }
                        else {
                            NavigationService.reset('HomeScreen')
                        }
                }}
                />
            </Animatable.View>

        </Animatable.View>
    </View>
}

export default Login