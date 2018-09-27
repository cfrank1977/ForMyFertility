
import React, { Component } from 'react';

import Amplify, { Auth } from 'aws-amplify' 
import config from './aws-exports' 
import AppSyncConfig from './appsync-config' // NEW
Amplify.configure({ ...config, ...AppSyncConfig }) // UPDATED
import HomeScreen from './src/index';

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
         <HomeScreen />
      )
    }
    return (
        
         <HomeScreen 
            screenProps={{
              authenticate: this.authenticate.bind(this)
              }}/>
    );
  }
}


