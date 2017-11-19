import { StackNavigator } from 'react-navigation';

// import components
import MainScreen from './MainScreen';
import SignInScreen from './SignInScreen';

const RootNavigator = StackNavigator({
	Home: {
		screen: MainScreen, 
		navigationOptions: { 
			headerTitle: 'Welcome'
		}
	},
	SignIn: {
		screen: SignInScreen,
		navigationOptions: {
			headerTitle: 'Start Chat'
		}
	}
});

export default RootNavigator;