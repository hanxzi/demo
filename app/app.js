import React, { Component} from 'react';
import { Button, Text, View } from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FindPage from './page/find/index'
import MinePage from './page/mine/index'
import SignInPage from './page/SignIn'
import HomePage from './page/home/index'
import LoadingPage from './page/AuthLoading'
import ListScreen from './page/list/index'
import DetailScreen from './page/detail/index'
import ShopScreen from  './page/shop/index'


const MainStack = createBottomTabNavigator(
	{
		Home: HomePage,
		Find: FindPage,
		Mine: MinePage,
	},
	{
		initialRouteName: 'Home',
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-navigate${focused ? '' : '-outline'}`;
				} else if (routeName === 'Find') {
					iconName = `ios-locate${focused ? '' : '-outline'}`;
				} else if (routeName === 'Mine') {
					iconName = `ios-refresh-circle${focused ? '' : '-outline'}`;
				}
				return <Ionicons name={iconName} size={25} color={tintColor} />;
			},
		})
	}
);


MainStack.navigationOptions = ({ navigation }) => {
	const { routes, index } = navigation.state;
	const navigationOptions = {};
	if (routes[index].routeName === 'Home') {
		navigationOptions.title = 'Home';
	}
	if (routes[index].routeName === 'Find') {
		navigationOptions.title = 'Find';
	}
	if (routes[index].routeName === 'Mine') {
		navigationOptions.title = 'Mine';
	}
	return navigationOptions;
}

const AppStack = createStackNavigator ({
	Main:MainStack,
	Shop: ShopScreen,
	List: ListScreen,
	Detail: DetailScreen,
},{
	navigationOptions: ({ navigation }) => ({
		headerBackTitle: null,
	})
})

const AuthStack = createStackNavigator({
	SignIn: SignInPage
});

const Navigator = createSwitchNavigator (
	{
		Loading: LoadingPage,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'Loading',
	}
)
export default class App extends Component {
	render() {
		return (
			<Navigator/>
		)
	};
}
