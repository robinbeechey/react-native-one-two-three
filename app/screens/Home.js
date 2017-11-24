import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, Platform, View, Text } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { connectAlert } from '../components/Alert';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ListItem} from '../components/List';
import {WordBox} from '../components/WordBox';


const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#FFF';
const ICON_SIZE = 50;


const mapStateToProps = (state) => {
    return {
        primaryColor: state.theme.primaryColor,
        secondaryColor: state.theme.secondaryColor,
    };
};

const  user = {
    name: 'Simon macAlex',
    image: 'http://www.jbascollege.edu.in/dept_info/176_dummy-profile.jpg',
    status: 'Typing...'
};

class Home extends Component {

    static propTypes = {
        navigator: PropTypes.object,
        dispatch: PropTypes.func,
    };

    static navigatorStyle = {
        navBarHidden: true,
    };

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true
        }
    }

    componentWillMount() {

    }

    handleCarrotPress = () => {
        console.log('Carrot Pressed', this.props);
    };


    render() {

        if (this.state.loggedIn) {
            return (
                <Container>
                    <Header/>
                    <WordBox/>
                    <ListItem text={user.name} image={user.image}/>
                    <ListItem text={user.name} image={user.image}/>
                </Container>
            );
        } else {
            return (
                <Container backgroundColor={this.props.secondaryColor}>
                    <Ionicons onPress={this.handleCarrotPress} name={`${ICON_PREFIX}-close`} color={ICON_COLOR}
                              size={ICON_SIZE}/>
                </Container>
            );
        }


    }
}

export default connect(mapStateToProps)(connectAlert(Home));