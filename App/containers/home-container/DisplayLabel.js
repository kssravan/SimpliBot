import React from 'react'
import {Text} from 'react-native'
import { block } from 'react-native-reanimated'

const DisplayLabel = ({label, value}) => {
    return <Text style={{fontSize:''}}>{value}</Text>
}

export default DisplayLabel