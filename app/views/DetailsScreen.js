
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

export default class DetailsScreen extends Component {
	constructor (props) {
		super(props);
	}
	static navigationOptions = ({ navigation, navigationOptions }) => {
		const { params } = navigation.state;

		return {
			title: params ? params.otherParam : 'A Nested Details Screen',
			headerRight: (
				<Button
					onPress={() => navigation.navigate('MyModal')}
					title="button"
				/>
			),
		};
	};
	render () {
		const { navigation } = this.props;
		const itemId = navigation.getParam('itemId', 'NO-ID');
		const otherParam = navigation.getParam('otherParam', 'some default value');
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>itemId: {JSON.stringify(itemId)}</Text>
				<Text>otherParam: {JSON.stringify(otherParam)}</Text>
				<Button
					title="DetailsScreen"
					onPress={() => this.props.navigation.navigate('Lists')}
				/>
				<Button
					title="Update the title"
					onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
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