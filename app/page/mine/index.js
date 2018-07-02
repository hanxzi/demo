
import React, { Component} from 'react';
import {
	AsyncStorage,
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';
export default class MineScreen extends Component {
	static navigationOptions = ({navigation}) => ({
		// title: '我的',
	});
	constructor (props) {
		super(props);
	}
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>This  is Mine page</Text>
				<Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
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