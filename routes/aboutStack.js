import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';
import CustomHeader from '../shared/header';

const routes = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => ({
            headerTitle: () => <CustomHeader title="About" navigation={navigation} />,
        })
    },
}

const AboutStack = createStackNavigator(
    routes,
  {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 100,
        }
    }
});

export default AboutStack;
