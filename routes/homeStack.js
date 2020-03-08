import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const routes = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    },
}

const HomeStack = createStackNavigator(
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

export default HomeStack;
