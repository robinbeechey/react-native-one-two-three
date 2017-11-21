import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { connectAlert } from '../components/Alert';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#FFF';
const ICON_SIZE = 50;


const mapStateToProps = (state) => {

    return {
        primaryColor: state.theme.primaryColor,
    };
};

class Home extends Component {

    static propTypes = {
        navigator: PropTypes.object,
        dispatch: PropTypes.func,
    };

    componentWillMount() {

    }

    handleCarrotPress = () => {
        console.log('Carrot Pressed', this.props);
        //this.props.navigator.push({
        //    screen: 'Themes',
        //    title: 'Themes',
        //});
    };


    render() {

        return (
            <Container backgroundColor={this.props.primaryColor}>
                <Ionicons onPress={this.handleCarrotPress} name={`${ICON_PREFIX}-nutrition`} color={ICON_COLOR}
                          size={ICON_SIZE}/>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(connectAlert(Home));