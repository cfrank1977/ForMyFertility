import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import configureStore from './src/store/configureStore';
import initialState from './src/reducers/initialState';
import FertilityForm from './src/components/fertility/fertilityForm';

const store = configureStore(initialState);

// const ConnectedUserForm = connect(null)(fertilityForm);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FertilityForm />
      </Provider>
    );
  }
}