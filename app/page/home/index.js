
import React, { Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	ScrollView
} from 'react-native';
import { Carousel , Flex, WhiteSpace, Button , WingBlank } from 'antd-mobile-rn';

const {height, width} = Dimensions.get('window');
export default class HomeScreen extends Component<any, any> {
	static navigationOptions = ({navigation}) => ({
		// title: '首页',
	});
	constructor (props) {
		super(props);
	}
	_ListAsync = async () => {
		this.props.navigation.navigate('List');
	};

	_DetailAsync = async () => {
		this.props.navigation.navigate('Detail');
	};

	_ShopAsync = async () => {
		this.props.navigation.navigate('Shop');
	};
	render() {
		return (
			<View style={styles.main}>
				<Carousel
					style={styles.wrapper}
					autoplayInterval={2}
					selectedIndex={2}
					infinite
					afterChange={this.onselectedIndexChange}
				>
					<View style={[styles.container, { backgroundColor: 'red' }]}>
						<Text>Carousel 1</Text>
					</View>
					<View style={[styles.container, { backgroundColor: 'blue' }]}>
						<Text>Carousel 2</Text>
					</View>
					<View style={[styles.container, { backgroundColor: 'yellow' }]}>
						<Text>Carousel 3</Text>
					</View>
				</Carousel>
				<ScrollView
					automaticallyAdjustContentInsets={false}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
				>
					<WhiteSpace size="md"/>
					<WingBlank size="md">
						<Flex wrap="wrap" direction="row" justify={'between'} >
							<Button onClick={()=> { this._ListAsync() }} size={'small'} style={{ width:  Dimensions.get('window').width/2 - 20, backgroundColor: '#666' , marginBottom: 10}}>Go To List Page</Button>
							<Button onClick={()=> { this._DetailAsync() }}  size={'small'} style={{ width:  Dimensions.get('window').width/2 - 20, backgroundColor: '#999' , marginBottom: 10}}>Go To Detail Page</Button>
							<Button onClick={()=> { this._ShopAsync() }}  size={'small'} style={{ width:  Dimensions.get('window').width/2 - 20, backgroundColor: '#999' , marginBottom: 10}}>Go To Shop Page</Button>
						</Flex>
					</WingBlank>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 150,
	},
	wrapper: {
		backgroundColor: '#fff',
	},
	text: {
		color: '#fff',
		fontSize: 36,
	},
});