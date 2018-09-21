
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Amplify, { Auth } from 'aws-amplify' 
import config from './aws-exports' 
import AppSyncConfig from './appsync-config' // NEW
Amplify.configure({ ...config, ...AppSyncConfig }) // UPDATED

import Tabs from './src/Tabs'
import Questions from './src/Questions';

export default class App extends Component {
  state = {
    isAuthenticated: false
    
  }
  authenticate(isAuthenticated) {
    this.setState({ isAuthenticated })
  }
  render() {
    if(this.state.isAuthenticated) {
      console.log('Auth: ', Auth)
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
         <Questions />
        </View>
      )
    }
    return (
        <View style={styles.container}>
         <Tabs 
            screenProps={{
              authenticate: this.authenticate.bind(this)
              }}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
