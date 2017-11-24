import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 150,
        width: '100%',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '$primaryPurple'
    },
    text: {
        fontSize: 40,
        color: '$primaryPink',
    }
})