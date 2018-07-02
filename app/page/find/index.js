
import React, { Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
export default class FindScreen extends Component {
	static navigationOptions = ({navigation}) => ({
		// title: '发现',
	});
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>This  is Find page</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabContent: {
		flex: 1,
	},
	tabText: {
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: '#ff7f50',
		marginTop: 150,
		textAlign: 'center',
	},
});