import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default () => {
    const { container, titleText } = globalStyles;

    return (
        <View style={container}>
            <Text style={titleText}>About Page</Text>
        </View>
    )
};
