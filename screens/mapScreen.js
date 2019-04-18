import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { AntDesign } from 'expo';

/* Getting Height and Width from Dimensions */
const { height, width } = Dimensions;

export default class mapScreen extends Component {
	static navigationOptions = {
		headerRight: <AntDesign name="login" size={30} style={{ marginRight: 4 * width / 100 }} />,
		headerLeft: null
	};
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Map Section</Text>
			</View>
		);
	}
}
