
import React, { Component } from 'react';

import Amplify, { Auth } from 'aws-amplify' 
import config from './aws-exports' 
import AppSyncConfig from './appsync-config' // NEW
Amplify.configure({ ...config, ...AppSyncConfig }) // UPDATED
import HomeScreen from './src/index';
import BottomTabs from './src/BottomTabs'


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
        
         <BottomTabs 
            screenProps={{
              authenticate: this.authenticate.bind(this)
              }}/>
    );
  }
}


