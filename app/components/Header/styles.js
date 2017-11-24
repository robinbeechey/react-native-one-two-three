import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        '@media ios': {
            paddingTop: 20,
        },
        height: 50,
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    icon: {
        width: 24
    }
})