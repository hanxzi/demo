
import React, { Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';
export default  class ShopScreen extends Component {
	static navigationOptions = {
		title: 'Shop',
	};
	constructor (props) {
		super(props);
	}
	_nextPage () {
		this.props.navigation.navigate('List');
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>This  is  Shop Page</Text>
				<Button title="Go to List" onPress={() => { this._nextPage()}} />
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