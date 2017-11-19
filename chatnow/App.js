import React from 'react';
import { 
  View, 
  Navigator 
} from 'react-native';

import RootNavigator from './components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
