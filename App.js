
import React, { Component } from 'react';

import Amplify, { Auth } from 'aws-amplify' 
import config from './aws-exports' 
import AppSyncConfig from './appsync-config' // NEW
Amplify.configure({ ...config, ...AppSyncConfig }) // UPDATED
import HomeScreen from './src/index';
import Questions from './src/Questions';

export default class App extends Component {
  state = {
    isAuthenticated: false
    
  }
  authenticate(isAuthenticated) {
    this.setState({ isAuthenticated })
    this.props.navigation.navigate('App');
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
        
         <HomeScreen 
            screenProps={{
              authenticate: this.authenticate.bind(this)
              }}/>
    );
  }
}


