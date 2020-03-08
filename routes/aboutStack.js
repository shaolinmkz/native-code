import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';

const routes = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
        }
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
