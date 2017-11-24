import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';


const ListItem = ({
    text,
    onPress,
    selected =false,
    visible=true,
    image
    }) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
            <Image resizeMode="contain" style={styles.image} source={{uri:image}}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string
};

export default ListItem;