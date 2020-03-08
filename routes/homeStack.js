import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import CustomHeader from '../shared/header';


const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                headerTitle: () => <CustomHeader title="Home" navigation={navigation} />,
            })
        },
        ReviewDetails: {
            screen: ReviewDetails,
            navigationOptions: {
                title: 'Review Details',
            }
        },
    },
  {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 100,
        }
    }
});

export default HomeStack;
