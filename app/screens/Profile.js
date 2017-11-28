import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, StatusBar, View, Text, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Ionicons } from 'react-native-navigation';
import { ListItem, Separator } from '../components/List';
import * as actions from '../actions/app';
import {ProfileHeader} from '../components/ProfileHeader';
import firebase from '../../firebase';

const styles = EStyleSheet.create({
    $lightPurple: '$primaryLightPurple',
    $purple: '$primaryPurple',
    $pink: '$primaryPink',
});

class Profile extends Component {

    static propTypes = {
        navigator: PropTypes.object,
        dispatch: PropTypes.func,
    };

    handleLogout() {
        var _this = this;

        firebase.auth().signOut().then(function () {
            _this.props.logout();
        }).catch(function (error) {
           console.log('error signing out', error);
        });
    };

    render() {
        const user = this.props.user;
        console.log(user);

        return (
            <ScrollView style={{paddingTop: 20}}>
                <StatusBar translucent={false} barStyle="default"/>
                <ProfileHeader name={user.name} image={user.image}/>
                <Button title="Logout" onPress={this.handleLogout.bind(this)}/>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, actions)(Profile);