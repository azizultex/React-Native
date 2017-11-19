import React, { Component } from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

const SignInScreen = ( props ) => {
	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<Text style={styles.label}>My Name: </Text>
				<TextInput style={styles.textbox} />
				<Text style={styles.label}>My Account Number: </Text>
				<TextInput style={styles.textbox} keyboardType="numeric" />
				<TouchableOpacity style={styles.actionButton}>
					<Text style={styles.actionButtonText}>Go!</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.externalLink}>Forgot your account number?</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#68b8d8',
	}, 
	formContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	label: {
		fontSize: 20,
		marginTop: 36,
		marginBottom: 6,
		color: '#ffffff',
		fontWeight: 'bold',
	},
	textbox: {
		backgroundColor: '#ffffff',
		padding: 5
	},
	actionButton: {
		marginTop: 36,
		alignSelf: 'flex-end',
		backgroundColor: '#cb3b27',
	},
	actionButtonText: {
		color: '#ffffff',
		fontSize: 24,
		textAlign: 'center',
		fontWeight: 'bold',
		marginVertical: 10,
		marginHorizontal: 20,
	},
	externalLink: {
		alignSelf: 'flex-start',
		color: '#dfdfdf',
		fontSize: 12,
		marginLeft: 20,
		marginBottom: 30,
	}
});

export default SignInScreen;