import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const WordBox = ({word, typingStatus}) => {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter your word</Text>
        </View>
    );
};

WordBox.propTypes = {
    word: PropTypes.string,
    typingStatus: PropTypes.string,
};

export default WordBox;


