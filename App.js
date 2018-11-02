import React, { Component } from 'react';

import Amplify, { Auth } from 'aws-amplify' 
import config from './aws-exports' 
import AppSyncConfig from './appsync-config'
Amplify.configure({ ...config, ...AppSyncConfig })

import { Provider, connect } from 'react-redux';
import configureStore from './src/store/configureStore';
import initialState from './src/reducers/initialState';

import HomeScreen from './src/components/home/index'

const store = configureStore(initialState);

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

    const ConnectedUserForm = connect(null)(HomeScreen);

    return (
      <Provider store={store}>
        <ConnectedUserForm screenProps={{
              authenticate: this.authenticate.bind(this)
              }}/>
      </Provider>
    );
  }
}