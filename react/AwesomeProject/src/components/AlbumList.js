import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import AlbumDetails from './AlbumDetails';

class AlbumList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			albums: []
		};
	}

	componentWillMount() { 
		fetch('http://rallycoding.herokuapp.com/api/music_albums')
		.then(response => response.json())
		.then(data => this.setState({ albums: data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => {
			return <AlbumDetails key={album.title} album={album} />
		});
	}

	render() {
		return (
			<ScrollView>
				{ this.renderAlbums() }
			</ScrollView>
		);
	}

}

export default AlbumList;
