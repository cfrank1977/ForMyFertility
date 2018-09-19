
import React, { Component } from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Auth } from 'aws-amplify' 


export default class SignIn extends Component {
  state = {
    username: '',
    password: '',
    confirmationCode: '',
    user: {}
  }
  onChangeText(key,value) {
    this.setState({
      [key]: value
    })
  }
  signIn() {
    const { username, password } = this.state
    Auth.signIn(username, password)
    .then(user => {
        this.setState({ user})
        console.log('successful sign in!')
    })
    .catch(err => console.log('error signing in!: ', err))
  }
  confirmSignIn() {
    Auth.confirmSignIn(this.state.user,this.state.confirmationCode)
    .then(() => {
      this.props.screenProps.authenticate(true)
      console.log('successful confirming sign up!')
    })
    .catch(err => console.log('error confirming signing up!: ', err))
  }
  render() {
    return (
        <View style={styles.container}>
          <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder='username' 
          />
          <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder='password' 
          />
          <Button title='Sign In' onPress={this.signIn.bind(this)} />
          <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder='Confirmation Code' 
          />
          <Button title='Confirm Sign In' onPress={this.confirmSignIn.bind(this)} />
        </View>
    );
  }
}



const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
