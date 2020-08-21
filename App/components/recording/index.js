import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Animated, Image, Easing, TouchableOpacity, Text } from 'react-native';
import { Icon } from '@app/components'

const RecordingComponent = (props) => {
    const { isRecording } = props

    const [animated, setAnimated] = useState(new Animated.Value(0))
    const [opacityA, setOpacityA] = useState(new Animated.Value(1))

    runAnimation = () => {
        Animated.loop(
            Animated.parallel([
                Animated.timing(animated, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(opacityA, {
                    toValue: 0.5,
                    duration: 1000,
                    useNativeDriver: false,
                })
            ])
        ).start();
    }

    stopAnimation = () => {
        Animated.loop(
            Animated.parallel([
                Animated.timing(animated,),
                Animated.timing(opacityA)
            ])
        ).stop();
    }

    onPress = () => {
        props.onPress()
    }

    micButton = () => {
        if (isRecording) {
            runAnimation();
            return (
                <Animated.View style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: 'red',
                    opacity: opacityA,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [
                        {
                            scale: animated
                        }
                    ]
                }}>
                    <Icon name="microphone" type="FontAwesome" size={24} color="#05375a" />
                </Animated.View>
            );
        } else {
            //some function
            return (
                <View style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: 'rgba(153,0,0,0.4)',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Icon name="microphone" type="FontAwesome" size={24} color="#05375a" />
                </View>
            );
        }
    }

    return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <TouchableOpacity style={{paddingTop:20}} onPress={onPress}>
            {micButton()}
        </TouchableOpacity>

    </View>
}

export default RecordingComponent