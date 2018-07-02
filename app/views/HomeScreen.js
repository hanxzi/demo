
import React, { Component} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Button
} from 'react-native';
export default class HomeScreen extends Component {
	constructor (props) {
		super(props);
		this.props.navigation.navigate('Auth')
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Lists')}
				/>
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