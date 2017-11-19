import React, { Component } from 'react';
import { 
	View, 
	Text, 
	TouchableOpacity, 
	StyleSheet 
} from 'react-native';

const MainScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Welcome to ChatNow!</Text>
			</View>	
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={ () => { navigation.navigate('SignIn') }}>
					<Text style={styles.buttonText}>Get Help</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	buttonContainer: {
		flex: 2,
		justifyContent: 'center'
	},
	button: {
		height: 300,
		width: 300,
		justifyContent: 'center',
		backgroundColor: '#cb3b27',
		borderWidth: 10,
		borderRadius: 150,
		borderColor: '#8e3429'
	},
	buttonText: {
		color: '#ffffff',
		fontSize: 50,
		fontWeight: '200',
		textAlign: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0)',
	}
});

export default MainScreen;