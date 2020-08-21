import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from '@app/components'

const HeaderIconButton = ({ iconName, iconType, onClick }) => {
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
        <Icon name={iconName} type={iconType} size={24} color="#05375a" />
    </TouchableOpacity>
}

export default HeaderIconButton