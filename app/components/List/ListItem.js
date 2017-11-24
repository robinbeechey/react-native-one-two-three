import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';


const ListItem = ({
    text,
    name,
    onPress,
    visible=true,
    image,
    typingStatus,
    textReveal
    }) => {

    return (
        <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
            <View style={styles.row}>
                <Image resizeMode="contain" style={styles.image} source={{uri:image}}/>
                {
                    typingStatus ? <Text style={styles.typing}>Typing...</Text> :
                    <Text style={styles.complete}>{text && textReveal ? text : name}</Text>
                }
            </View>
        </TouchableHighlight>
    )

};

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    visible: PropTypes.bool,
    typingStatus: PropTypes.bool,
    textReveal: PropTypes.bool
};

export default ListItem;