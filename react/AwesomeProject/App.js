import React from 'react';
import { StyleSheet, Alert, ActivityIndicator, Vibration, Text, TextInput, View, Button } from 'react-native';

export default class PizzaTranslator extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

	render(){
		return(
			  <View style={styles.container}>
			    <View style={styles.buttonContainer}>
			      <Button
			        onPress={this._onPressButton}
			        title="Press Me!!!!"
			      />
			    </View>
			    <View style={styles.buttonContainer}>
			      <Button
			        onPress={this._onPressButton}
			        title="Press Me"
			        color="#841584"
			      />
			    </View>
			    <View style={styles.alternativeLayoutButtonContainer}>
			      <Button
			        onPress={this._onPressButton}
			        title="This looks great!"
			      />
			      <Button
			        onPress={() => Vibration.vibrate(100)}
			        title="OK!"
			        color="#841584"
			      />
			    </View>
			    <ActivityIndicator animatin></ActivityIndicator>
			  </View>
		)
	}
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})