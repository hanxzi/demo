
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
export default class ListsScreen extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Button
					title="ListsScreen"
					onPress={() => this.props.navigation.navigate('Details',{
						itemId: 86,
						otherParam: 'anything you want here',
					})}
				/>
			</View>
		)
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
