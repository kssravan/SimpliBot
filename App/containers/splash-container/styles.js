import { StyleSheet } from 'react-native';
import { metrics } from '@app/themes'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#05375a'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems:'center'
    },
    footer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal:30,
    },
    logo: {
        width: metrics.screenHeight * 0.7 * 0.4,
        height: metrics.screenHeight * 0.7 * 0.4,
    },
    title: {
        color: "#05375a",
        fontWeight: 'bold',
        fontSize: 30,
    },
    text: {
        color: 'gray',
        marginTop:5,        
    },
});