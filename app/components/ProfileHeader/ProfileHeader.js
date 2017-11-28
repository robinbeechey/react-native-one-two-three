import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const ProfileHeader = ({name, image}) => {


    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={{uri: image}}/>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
};

ProfileHeader.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
};

export default ProfileHeader;


