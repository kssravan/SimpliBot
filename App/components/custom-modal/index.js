import React from 'react'
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from '@app/components'
import Header from './header'
import { colors } from '@app/themes'

const ModalHeader = (props) => {
    return <Modal avoidKeyboard isVisible={props.isVisible}
        style={{
            justifyContent: 'flex-end',
            margin: 0,
        }}
        onBackdropPress={() => {
            props.onBackDropPress()
        }}
    >
        <View style={{ width: '100%', height: '40%', backgroundColor: colors.secondary, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingBottom: 60 }}>
            <Header
                title={props.title}
                onClose={() => {
                    props.onBackDropPress()
                }}
            />
            {props.children}
        </View>
    </Modal>
}

export default ModalHeader