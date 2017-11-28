import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView, Platform, View, Text ,TouchableOpacity, Image } from 'react-native';
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
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import firebase from '../../firebase';


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
    image:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
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
            loggedIn: true,
            user: {}
        };

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user: user})
            } else {
                console.log("no user");
                // No user is signed in.
            }
        });
    }

    componentWillMount() {

    }

    handleSettingsButton() {
        console.log('toggle');
        this.props.navigator.toggleDrawer({
            side: 'right', // the side of the drawer since you can have two, 'left' / 'right'
            animated: true, // does the toggle have transition animation or does it happen immediately (optional)
        });
    };


    render() {

        console.log("USER HOME", this.state.user);
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
    }
}

export default connect(mapStateToProps)(connectAlert(Home));