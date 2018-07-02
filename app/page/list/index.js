
import React, { Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';
export default  class DetailScreen extends Component {
	static navigationOptions = {
		title: 'List',
	};
	constructor (props) {
		super(props);
	}
	_nextPage () {
		this.props.navigation.navigate('Detail');
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>This  is  Detail Page</Text>
				<Button title="Go to Detail" onPress={() => { this._nextPage()}} />
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