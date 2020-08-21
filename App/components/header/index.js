import React from "react";
import { SafeAreaView, View, Text} from "react-native";
import { colors } from "@app/themes"


import _styles, {
    container,
    _shadowStyle,
    innerContainer,
    innerLeftContainer,
    _leftComponentStyle,
    _rightComponentStyle,
} from "./styles";

 const Header = props => {
    const {
        styles,
        headerTitle,
        leftComponent,
        rightComponent,
        centerComponent,
        statusBarHidden,
        centerComponentStyle,
    } = props;
    return (
        <SafeAreaView style={{ backgroundColor: colors.secondary, zIndex: 99, }}>
            <View
                style={[
                    styles || container(props),
                    // shadowStyle || _shadowStyle(shadowColor),
                ]}
            >
                <View style={[innerContainer(statusBarHidden)]}>
                    {leftComponent}
                    {centerComponent || (
                        <Text style={[centerComponentStyle, { fontSize: leftComponent ? 16 : 20 }]}>
                            {headerTitle}
                        </Text>
                    )}
                    {rightComponent || (
                        <View style={{ width: 1, height: 1 }}>

                        </View>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Header
