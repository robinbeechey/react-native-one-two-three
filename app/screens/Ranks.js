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

class Ranks extends Component {

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
            default:
                return this.props.navigator.pop();
        }
    }

    render() {
        return (
            <ScrollView style={{paddingTop: 20}}>
                <StatusBar translucent={false} barStyle="default"/>
                <ListItem
                    text="Ranks"
                    selected
                    checkmark={false}
                    iconBackground={styles.$lightPurple}
                />
                <Separator/>
            </ScrollView>
        )
    }
}

export default connect()(Ranks);