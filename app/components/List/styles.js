import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    $underlayColor: '$border',
    row: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '$white',
        //borderWidth: 2,
        //borderColor: 'black',
    },
    complete: {
        fontSize: 18,
        fontWeight: "500",
        color: '$primaryPurple',
        alignSelf: 'center',
        paddingLeft: 14
    },
    typing: {
        fontSize: 18,
        fontWeight: "500",
        color: '$primaryPink',
        alignSelf: 'center',
        paddingLeft: 14
    },
    notAccepted:{
        fontSize: 18,
        fontWeight: "500",
        color: '$primaryPurple',
        alignSelf: 'center',
        paddingLeft: 14,
        opacity: 40,
    },
    separator: {
        marginLeft: 20,
        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth
    },
    image: {
        backgroundColor: 'transparent',
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    iconVisible: {
        backgroundColor: '$primaryPink'
    }
})