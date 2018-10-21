import React, { Component } from 'react';

import { Provider, connect } from 'react-redux';

import configureStore from './src/store/configureStore';
import initialState from './src/reducers/initialState';

import UserForm from './src/components/fertility/fertilityForm'
import YearTrying from './src/components/fertility/questions/YearTrying'
import Age from './src/components/fertility/questions/Age'
import Pregnant from './src/components/fertility/questions/Pregnant'
import Miscarriage from './src/components/fertility/questions/Miscarriage'
import LiveBirth from './src/components/fertility/questions/liveBirth'
import Ectopic from './src/components/fertility/questions/ectopic'
import currentIVF from './src/components/fertility/questions/currentIVF'

const store = configureStore(initialState);

const ConnectedUserForm = connect(null)(currentIVF);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedUserForm />
      </Provider>
    );
  }
}