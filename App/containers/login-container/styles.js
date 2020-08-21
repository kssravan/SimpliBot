import { StyleSheet } from 'react-native';
import { metrics, colors } from '@app/themes'
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom:50,
    },
    footer: {
        flex: 3,
        backgroundColor: colors.secondary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical:30,
    },
    textHeader: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize:30,
    },
    textFooter: {
        color: colors.primary,
        fontSize:18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor,
        paddingBottom: 5,
        alignItems: 'center',
        justifyContent:'center'
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: colors.textInput
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        
    }
});