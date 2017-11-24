import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { StyleSheet, Text, View, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AlertProvider } from './components/Alert';
import store from './config/store';
import { Navigation } from 'react-native-navigation';
import { iconsMap, iconsLoaded } from './config/iconLoader';
import {registerScreens} from './screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from '../firebase';


registerScreens(store, Provider);

EStyleSheet.build({
    $primaryPink: '#FC447B',
    $primaryPurple: '#765483',
    $primaryLightPurple: '#C2B6C9',
    $white: '#fff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
});


const navigatorStyle = {
    statusBarColor: 'black',
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarBackgroundColor: '#0a0a0a',
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    tabBarButtonColor: 'red',
    tabBarSelectedButtonColor: 'red',
    tabBarBackgroundColor: 'white'
};


class App extends Component {

    constructor(props) {
        super(props);
        //this.startApp();
    }

    componentWillMount() {
        //check if logged in and start appropiate app
        this.startApp();
    }

    startApp() {
        console.log("starting app");
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home', // tab label as appears under the icon in iOS (optional)
                    screen: 'wordgame.Home', // unique ID registered wcith Navigation.registerScreen
                    title: 'Home', // title of the screen as appears in the nav bar (optional)
                    icon: require('./assets/book.png'),

                },
                {
                    label: 'Profile', // tab label as appears under the icon in iOS (optional)
                    screen: 'wordgame.Profile', // unique ID registered with Navigation.registerScreen
                    title: 'Profile', // title of the screen as appears in the nav bar (optional)
                    icon: require('./assets/avatar.png'),

                },
            ],
            drawer: { // optional, add this if you want a side menu drawer in your app
                right: { // optional, define if you want a drawer from the right
                    screen: 'wordgame.Settings', // unique ID registered with Navigation.registerScreen
                    passProps: {} // simple serializable object that will pass as props to all top screens (optional)
                },
                disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
            },
        });
    }


}

export default App;

