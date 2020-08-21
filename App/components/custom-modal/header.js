import React from 'react'
import { colors} from '@app/themes'
import { View, Text, Linking, TouchableOpacity, TextInput } from 'react-native'
import { Icon, HeaderButton, HeaderIcon, Button, RecordingComponent, RecordingSaveComponent } from '@app/components'

const Header = (props) => {
    return <View style={{ flexDirection: 'row', justifyContent: "space-between", borderBottomColor: "#e0e0e0", borderBottomWidth: 1, alignItems: 'center', padding: 20 }}>
        <Text style={{fontSize:16, fontWeight:'bold'}}>
            {props.title}
        </Text>
        <TouchableOpacity
            style={{ backgroundColor: colors.modalHeaderColor, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
            hitSlop={{
                top: 65,
                bottom: 30,
                left: 65,
                right: 65
            }}
            onPress={() => {
                props.onClose()
            }}>
            <Icon name="close" type="AntDesign" size={20} color="#2174D9" />
        </TouchableOpacity>
    </View>
}

export default Header