import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Icon } from '@app/components'
import Moment from 'moment'
import {colors} from '@app/themes'

const RecordedItem = (props) => {
    return <View style={{ padding: 10, borderBottomColor:'gray', borderBottomWidth:1 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>

            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary }}>{props.item.fileName}</Text>
                <Text style={{ fontSize: 12 }}>{Moment(props.item.time).format('d MMM')}</Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                    props.onselect()
                }}
            >
                <Icon name="play" type="AntDesign" size={20} color="green" />
            </TouchableOpacity>
        </View>
    </View>
}

export default RecordedItem