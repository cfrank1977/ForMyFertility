import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading } from "expo";
import * as Font from 'expo-font';

import { Root, StyleProvider } from 'native-base';
import getTheme from './src/native-base-theme/components';
import material from './src/native-base-theme/variables/material';

import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify'
import AppSyncConfig from './src/aws-exports'
Amplify.configure({ ...AppSyncConfig })

import { Provider } from 'react-redux';
import store from './src/store/store';
import AppWithNavigationState from './src/navigators';

console.disableYellowBox = true;

export class App extends Component {
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

  const theme = StyleSheet.create({
    ...AmplifyTheme,
    button: {
      ...AmplifyTheme.button,
      backgroundColor: '#45ccb1'
    },
    sectionFooterLink: {
      ...AmplifyTheme.sectionFooterLink,
      color: '#45ccb1'
    },
    buttonDisabled: {
      ...AmplifyTheme.buttonDisabled,
      backgroundColor: '#d0f2eb'
    }
  });

  export default withAuthenticator(App, false, [], null, theme);
