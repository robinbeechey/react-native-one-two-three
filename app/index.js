import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AlertProvider } from './components/Alert';
import store from './config/store';
import { Navigation } from 'react-native-navigation';
import { iconsMap, iconsLoaded } from './config/iconLoader';
import {registerScreens} from './screens';

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


//class App extends Component {
//
//    constructor(props) {
//        super(props);
//        //iconsLoaded.then(()=> {
//        this.startApp();
//        //});
//    }
//
//
//    //startApp() {
//    //    Navigation.startTabBasedApp({
//    //            tabs: [
//    //                {
//    //                    label: 'One', // tab label as appears under the icon in iOS (optional)
//    //                    screen: 'Home', // unique ID registered wcith Navigation.registerScreen
//    //                    title: 'Home', // title of the screen as appears in the nav bar (optional)
//    //                    icon: iconsMap['ios-person--active'],
//    //
//    //                },
//    //                {
//    //                    label: 'One', // tab label as appears under the icon in iOS (optional)
//    //                    screen: 'Home', // unique ID registered with Navigation.registerScreen
//    //                    title: 'Home', // title of the screen as appears in the nav bar (optional)
//    //                    icon: iconsMap['ios-person--active'],
//    //
//    //                },
//    //            ],
//    //        });
//    //}
//
//    startApp() {
//
//        Navigation.startSingleScreenApp({
//            screen: {
//                screen: 'Home', // unique ID registered with Navigation.registerScreen
//                title: 'Home', // title of the screen as appears in the nav bar (optional)
//            }
//        });
//    }
//
//
//}

export default () => {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'Home', // unique ID registered with Navigation.registerScreen
            title: 'Home', // title of the screen as appears in the nav bar (optional)
        }
    });
}


