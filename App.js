
import React, { Component } from 'react';
import { Provider } from "react-redux";
import Amplify, { Auth } from 'aws-amplify' 
import config from './aws-exports' 
import AppSyncConfig from './appsync-config' // NEW
Amplify.configure({ ...config, ...AppSyncConfig }) // UPDATED
import HomeScreen from './src/routes';
import store from "./src/components/store/Store";



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
        <Provider store={store}>
        <HomeScreen 
            screenProps={{
              authenticate: this.authenticate.bind(this)
              }}/>
        </Provider>
         
    );
  }
}


