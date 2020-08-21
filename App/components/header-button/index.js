import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const HeaderButton = ({ title, onClick }) => {
    return <TouchableOpacity
        hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
        }}
        onPress={() => {
            onClick()
        }}
    >
        <Text style={{ color: '#05375a', fontSize: 15, fontWeight:'bold' }}>{title}</Text>
    </TouchableOpacity>
}

export default HeaderButton