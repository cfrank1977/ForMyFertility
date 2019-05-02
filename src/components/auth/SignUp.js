import React, { Component } from 'react';
import {
  Container,
  Body,
  Button,
  Form,
  Text,
  Header,
  Content,
  Item,
  Input,
  Label
} from 'native-base';
import PhoneInput from 'react-native-phone-input'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Auth, Logger } from 'aws-amplify';

const logger = new Logger('SignUp');

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = { 
      error: null,
      phone_number: '',
    }
  }

  changeState(state, data) {
    const { onStateChange } = this.props;
    if (onStateChange) {
      onStateChange(state, data);
    }
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }

  signUp() {
    const { username, password, email, phone_number } = this.state;
    console.log(`${JSON.stringify(this.state)}`)
    logger.info('sign up with ' + username);
    Auth.signUp({
      username: username,
      password: password,
      phone_number: phone_number,
      attributes: {
        email: email,
        phone_number: phone_number
      },
    })
      .then(() => this.signUpSuccess(username))
      .catch(err => this.signUpError(err));
  }
  signUpSuccess(username) {
    logger.info('sign up success with ' + username);
    this.setState({ error: null });

    this.changeState('confirmSignUp', username);
  }

  signUpError(err) {
    logger.info('sign up error', err);
    let message = err.message || err;
    if (message.startsWith('Invalid phone number')) {
      // reference: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html
      message = 'Phone numbers must follow these formatting rules: A phone number must start with a plus (+) sign, followed immediately by the country code. A phone number can only contain the + sign and digits. You must remove any other characters from a phone number, such as parentheses, spaces, or dashes (-) before submitting the value to the service. For example, a United States-based phone number must follow this format: +14325551212.'
    }
    this.setState({ error: message });
  }

  render() {
    const { authState } = this.props;
    if (authState !== 'signUp') { return null; }

    const { error } = this.state;

    return (
      <Content>
        <Grid>
          <Form>
            <Item stackedLabel style={{ marginTop: 30 }}>
              <Label>Email (Username)</Label>
              <Input
                type="email"
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ username: email, email: email })}
                autoFocus
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                type="password"
                secureTextEntry
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
            <Item stackedLabel style={{ marginTop: 30 }}>
              <Label>Phone number</Label>
              <PhoneInput
                style={{ margin: 10 }}
                ref='phone'
                value={this.state.phone_number}
                onChangeText={(val) => {
                  if (this.state.phone_number === '') {
                    // render UK phone code by default when Modal is not open
                    this.onChangeText('phone_number', defaultCode + val)
                  } else {
                    // render country code based on users choice with Modal
                    this.onChangeText('phone_number', val)
                  }
                }}
              />
            </Item>
            <Button block success onPress={() => { this.signUp() }}>
              <Text>
                Create account
                  </Text>
            </Button>
            {error &&
              <Text>{error}</Text>
            }
            <Row>
              <Button transparent onPress={() => this.changeState('signIn')}>
                <Text>
                  Back to sign in
                  </Text>
              </Button>
              <Button transparent onPress={() => this.changeState('confirmSignUp')} >
                <Text>
                  Confirm a code
                  </Text>
              </Button>
            </Row>
          </Form>
        </Grid>
      </Content>
    )
  }
}