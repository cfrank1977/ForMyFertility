import React, { Component } from 'react';
import { Root, StyleProvider } from 'native-base';
import { Font, AppLoading } from "expo";
import getTheme from './src/native-base-theme/components';
import material from './src/native-base-theme/variables/material';
import Amplify from 'aws-amplify'
import AppSyncConfig from './src/aws-exports'
Amplify.configure({ ...AppSyncConfig })

import { Provider } from 'react-redux';
import store from './src/store/store';
import AppWithNavigationState from './src/navigators';

console.disableYellowBox = true;

export default class App extends Component {
  state = {
    isAuthenticated: false,
    loading: true
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
        return (
          <Root>
            <Provider store={store}>
              <StyleProvider style={getTheme(material)}>
                <AppLoading />
              </StyleProvider>
            </Provider>
          </Root>
        );
      }
      return (
        <Root>
          <Provider store={store}>
            <StyleProvider style={getTheme(material)}>
              <AppWithNavigationState />
            </StyleProvider>
          </Provider>
        </Root>
      );
    }
  }