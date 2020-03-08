import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default ({ navigation: { getParam }}) => {
    const { container, titleText } = globalStyles;
    return (
        <View style={container}>
            <Text style={{}}>{getParam('title')}</Text>
            <Text style={{}}>{getParam('rating')}</Text>
            <Text style={{}}>{getParam('year')}</Text>
        </View>
    )
};
