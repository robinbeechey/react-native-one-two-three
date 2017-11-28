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
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from '../../firebase';
import * as actions from '../actions/app';


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        user: state.auth.user
    };
};

class Launch extends Component {

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
            loggedIn: null
        };


    }

    componentWillMount() {
        console.log('Launch Will mount');

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
                //redirect root
                this.props.changeAppRoot('loggedIn');
            } else {
                this.setState({loggedIn: false})
            }
        }).bind(this);
        //check if there is a current user firebase
    }


    _fbAuth() {

        //console.log('Props OUt', this.props);

        var props = this.props;

        //props.login();

        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function (result) {
            if (result.isCancelled) {
                console.log("CANCELLED", result);
            } else {
                console.log('SUCCESS', result);


                AccessToken.getCurrentAccessToken().then((accessTokenData) => {

                    //var firebase = firebase.firebase_;

                    console.log("ACCESS TOKEN DATA", accessTokenData.accessToken);

                    //console.log("FIREBASE", firebase.firebase_.auth.FacebookAuthProvider.credential(accessTokenData.accessToken));

                    var credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);

                    console.log("CREDENTIAL", credential);

                    console.log('Props', this.props);

                    firebase.auth().signInWithCredential(credential).then((result) => {
                        //promise successful
                        //call action to login and build user model
                        var res = result;
                        console.log("RESPONSE", res);

                        props.login();
                        console.log("CURRENY USER", firebase.auth().currentUser);
                    }, (error) => {
                        //nope
                        console.log("ERROR", error);
                    });

                    //this.props.login();

                }, (error) => {
                    console.log('Some error occured:' + error);
                });

            }
        }, function (error) {
            console.log('an error occured:' + error)
        });


        //this.props.login();

    }

    renderLaunchScreen() {
        console.log("state", this.state.loggedIn);

        if (this.state.loggedIn) {
            console.log("logged in", this.props);

            return (
                <Container auth>
                    <TouchableOpacity>
                        <Image resizeMode="contain" style={{width: 100, height: 100, borderRadius: 50}}
                           source={{uri: this.props.user.image}}/>
                        <Text>Welcome name {this.props.user.name}</Text>
                    </TouchableOpacity>
                </Container>
            )
        }

        return (
            <Container auth>
                <TouchableOpacity onPress={this._fbAuth.bind(this)}>
                    <Text>One, two, three</Text>
                    <Image resizeMode="contain" style={{width: 200, height: 90}}
                           source={{uri: "https://appon.io/wp-content/uploads/2016/12/fb_login_default.png"}}/>
                </TouchableOpacity>
            </Container>
        )

    }


    render() {
        return (
            this.renderLaunchScreen()
        )
    }
}

export default connect(mapStateToProps, actions)(connectAlert(Launch));