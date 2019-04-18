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
import { AntDesign } from '@expo/vector-icons/';

/* Screens / Displays */
import LoginScreen from './screens/loginScreen';
import profileScreen from './screens/profileScreen';
import mapScreen from './screens/mapScreen';

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}

const DashboardTabNavigator = createBottomTabNavigator(
	{
		Map: {
			screen: mapScreen
		},
		Profile: {
			screen: profileScreen
		}
	}

	// {
	// 	navigationOptions: ({ navigation }) => {
	// 		const { routeName } = navigation.state.routes[navigation.state.index];
	// 		return {
	// 			header: null,
	// 			headerTitle: routeName
	// 		};
	// 	}
	// }
);

const AppStackNavigator = createStackNavigator({
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			header: null
		}
	},
	profile: {
		screen: DashboardTabNavigator,
		navigationOptions: {
			headerRight: <AntDesign name="login" size={30} />,
			headerLeft: null
		}
	}
});

// in React-Navigation v3 You have to CreateAppContainer manually like below
const AppContainer = createAppContainer(AppStackNavigator);
