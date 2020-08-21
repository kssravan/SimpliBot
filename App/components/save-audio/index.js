import React from 'react'
import { View, TextInput } from 'react-native'
import {Button} from '@app/components'

const saveAudio = ({ value, onChange, onSubmit }) => {
    console.log("value is", value)
    return <View style={{ padding: 20, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
        <View style={{ width: '100%', borderBottomColor: '#ededed', borderBottomWidth: 2, padding: 16, }}>
            <TextInput
                placeholder={'Like "Audio 1" or "Record 1"'}
                value={value}
                returnKeyType="done"
                onSubmitEditing={() => {
                    onSubmit()
                }}
                onChangeText={(text) => {
                    onChange(text)
                }}
            />
        </View>

        <Button
            title="Save"
            onClick={() => {
                onSubmit()
            }}
        />
    </View>
}

export default saveAudio