import { Platform } from "react-native";
import { colors } from "@app/themes"

export function container(props) {
    const { height, width, backgroundColor, statusBarHidden } = props;
    return {
        width: width || "100%",
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 2,
        ...Platform.select({
            ios: {
                top: 0,
                height: height || (statusBarHidden ? 50 : 70)
            },
            android: {
                top: 0,
                height: height || (statusBarHidden ? 60 : 70)
            }
        }),
        paddingHorizontal: 18,
        backgroundColor: backgroundColor || colors.white
    };
}

export function innerContainer(statusBarHidden) {
    return {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 44,
        ...Platform.select({
            ios: {
                top: statusBarHidden ? 0 : 24
            },
            android: {
                top: statusBarHidden ? 12 : 24
            }
        })
    };
}

export function innerLeftContainer(statusBarHidden) {
    return {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 44,
        ...Platform.select({
            ios: {
                top: statusBarHidden ? 0 : 24
            },
            android: {
                top: statusBarHidden ? 12 : 24
            }
        })
    };
}

export function _shadowStyle(shadowColor) {
    return {
        ...Platform.select({
            ios: {
                shadowRadius: 5,
                shadowOpacity: 0.15,
                shadowOffset: { width: 1, height: 7 },
                shadowColor: shadowColor || "#757575"
            },
            android: {
                elevation: 5
            }
        })
    };
}

export function _leftComponentStyle(leftComponentDisable) {
    return {
        marginLeft: 16,
        opacity: leftComponentDisable ? 0 : 1
    };
}

export function _rightComponentStyle(rightComponentDisable) {
    return {
        // marginRight: 16,
        // opacity: rightComponentDisable ? 0 : 1
    };
}

export default {
    centerComponentStyle: {
        justifyContent: "center",
        top: 0,
        color: colors.text.primary,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
    }
};

