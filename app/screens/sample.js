import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, StatusBar, View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Ionicons } from 'react-native-navigation';
import { ListItem, Separator } from '../components/List';
import { changePrimaryColor} from '../actions/theme';

const styles = EStyleSheet.create({
    $lightPurple: '$primaryLightPurple',
    $purple: '$primaryPurple',
    $pink: '$primaryPink',
});

class Settings extends Component {

    static propTypes = {
        navigator: PropTypes.object,
        dispatch: PropTypes.func,
    };

    handleThemePress(color) {
        this.props.dispatch(changePrimaryColor(color));

        //for different effects
        switch (color) {
            case styles.$orange:
                return this.props.navigator.pop({
                    animated: true,
                    animationType: 'fade',
                });
            case styles.$purple || styles.$green:
                return this.props.navigator.pop({
                    animated: true,
                    animationType: 'slide-horizontal',
                });
            case styles.$blue:
                return this.props.navigator.pop({
                    animated: true,
                    animationType: 'slide-up',
                });
            default:
                return this.props.navigator.pop();
        }
    }

    render() {
        return (
            <ScrollView style={{paddingTop: 20}}>
                <StatusBar translucent={false} barStyle="default"/>
                <ListItem
                    text="Blue"
                    onPress={() => this.handleThemePress(styles.$blue)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$blue}
                />
                <Separator/>
                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemePress(styles.$orange)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$orange}
                />
                <Separator/>
                <ListItem
                    text="Green"
                    onPress={() => this.handleThemePress(styles.$green)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$green}
                />
                <Separator/>
                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemePress(styles.$purple)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$purple}
                />
                <Separator/>
            </ScrollView>
        )
    }
}

export default connect()(Settings);