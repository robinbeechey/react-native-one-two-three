import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: '100%',
    },
    text: {
        paddingTop: 20,
        fontSize: 18,
        fontWeight: '500',
        color: '$primaryPink',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80,
    }
})