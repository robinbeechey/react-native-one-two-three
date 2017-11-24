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
        auth: state.auth
    };
};

const user = {
    name: 'Simon macAlex',
    word: 'word',
    image: 'http://www.jbascollege.edu.in/dept_info/176_dummy-profile.jpg',
    typingStatus: true,
    textReveal: false
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

    handleSettingsButton(){
        console.log('toggle');
        this.props.navigator.toggleDrawer({
            side: 'right', // the side of the drawer since you can have two, 'left' / 'right'
            animated: true, // does the toggle have transition animation or does it happen immediately (optional)
        });
    };


    render() {

        if (this.props.loggedIn) {
            return (
                <Container>
                    <Header onPress={this.handleSettingsButton.bind(this)}/>
                    <WordBox/>
                    <ListItem textReveal={user.textReveal} name={user.name} text={user.word} image={user.image}
                              typingStatus={user.typingStatus}/>
                    <ListItem textReveal={user.textReveal} name={user.name} text={user.word} image={user.image}
                              typingStatus={user.typingStatus}/>
                    <ListItem textReveal={user.textReveal} name={user.name} text={user.word} image={user.image}
                              typingStatus={false}/>
                    <ListItem textReveal={user.textReveal} name={user.name} text={''} image={user.image}
                              typingStatus={false}/>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Ionicons onPress={this.handleCarrotPress} name={`${ICON_PREFIX}-close`} color={ICON_COLOR}
                              size={ICON_SIZE}/>
                    <Text>Not Logged in</Text>
                    <Text>This will eventually be a button</Text>
                </Container>
            );
        }


    }
}

export default connect(mapStateToProps)(connectAlert(Home));