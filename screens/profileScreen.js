import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ButtomTabNavigation, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { AntDesign } from 'expo';

import mapScreen from './mapScreen';

/* Getting height and width from dimenions */
const { height, width } = Dimensions;

export default class profileScreen extends Component {
	static navigationOptions = {
		headerRight: <AntDesign name="login" size={30} style={{ marginRight: 4 * width / 100 }} />,
		headerLeft: null
	};
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props);
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Profile screen</Text>
			</View>
		);
	}
}
