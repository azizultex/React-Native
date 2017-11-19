import React from 'react';
import { View } from 'react-native';

// import component 
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class PizzaTranslator extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header headerText="Albums" />
				<AlbumList />
			</View>
		);
	}
}
