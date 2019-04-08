import React, { component } from 'react';
import { Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

// The burger icon from expo
import Icon from '@expo/vector-icons/Ionicons';

/* Screens / Displays */
import LoginScreen from './screens/loginScreen';
import profileScreen from './screens/profileScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}





const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  profile: {
    screen: profileScreen
  }
});

// in React-Navigation v3 You have to CreateAppContainer manually like below
const AppContainer = createAppContainer(AppStackNavigator);
