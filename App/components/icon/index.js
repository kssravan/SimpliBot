import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Icon = props => {
    const { type, name, color, size, onPress, style } = props;
    switch (type) {
        case 'AntDesign': {
            return (
                <AntDesign name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
        case 'Ionicons': {
            return (
                <Ionicons name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
        case 'FontAwesome': {
            return (
                <FontAwesome name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
        case 'FontAwesome5': {
            return (
                <FontAwesome5 name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
        case 'MaterialIcons': {
            return (
                <MaterialIcons name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
        case 'Entypo': {
            return (
                <Entypo name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
        case 'Feather': {
            return (
                <Feather name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
        case 'Fontisto': {
            return (
                <Fontisto name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
        case 'MaterialCommunityIcons': {
            return (
                <MaterialCommunityIcons name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
        case 'SimpleLineIcons': {
            return (
                <SimpleLineIcons name={name} size={size} style={style} color={color} onPress={onPress} />
            );
        }
    }
};

Icon.defaultProps = {
    size: 20,
    style: {},
    color: '#757575',
};

export default Icon
