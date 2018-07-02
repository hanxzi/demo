
import React, { Component} from 'react';
import {
	AsyncStorage,
	StyleSheet,
	Image,
	View,
	Dimensions,
	ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, InputItem, List , Grid ,Icon } from 'antd-mobile-rn';
import CustomStyles from '../component/CustomButton';

export default class SignInScreen extends  React.Component<any, any> {
	static navigationOptions = {
		title: '登录',
	};
	constructor (props) {
		super(props);
		this.state = {
			phone: '',
			password: '',
		};
	}
	_signInAsync = async () => {
		// await AsyncStorage.setItem('userToken', 'abc');
		// this.props.navigation.navigate('App');
	};
	render() {

		return (
			<ScrollView
				style={styles.container}
			>
				<View style={styles.image}>
					<Image style={styles.logo}
					       source={require('../assets/logo_03.png')}/>
				</View>
				<List>
					<InputItem
						clear
						type="phone"
						value={this.state.phone}
						onChange={(value: any) => {
							this.setState({
								phone: value,
							});
						}}
						placeholder="手机号码"
					>
					<Ionicons name={'ios-phone-portrait'} size={25} />
					</InputItem>
					<InputItem
						clear
						type="password"
						value={this.state.password}
						onChange={(value: any) => {
							this.setState({
								password: value,
							});
						}}
						placeholder="登录密码"
					>
					<Ionicons name={'ios-lock-outline'} size={25} />
					</InputItem>
					<List.Item>
						<Button
							onClick={() => { this._signInAsync()}}
							type="warning"
              styles={CustomStyles}
						>
							登录
						</Button>
					</List.Item>
				</List>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	image: {
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	logo: {
		width: 80,
		height: 80,
		marginTop: 50,
		marginBottom: 50,
	},
  btn: {
    backgroundColor:'#b1273e',
    borderColor:'#b1273e'
  },
  activeBtn: {
    backgroundColor:'#b1273e'
  }
});