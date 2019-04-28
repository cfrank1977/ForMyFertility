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
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Auth, Logger, JS } from 'aws-amplify';

const logger = new Logger('SignIn');

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.checkContact = this.checkContact.bind(this);
    this.changeState = this.changeState.bind(this);
    this.inputs = {};
    this.state = {
      error: null,
      username: null,
      password: null,
    }
  }

  changeState(state, data) {
    const { onStateChange } = this.props;
    if (onStateChange) {
      onStateChange(state, data);
    }
  }

  signIn() {
    const { username, password } = this.state;
    logger.info('sign in with ' + username);
    Auth.signIn(username, password)
      .then(user => this.signInSuccess(user))
      .catch(err => this.signInError(err));
  }

  signInSuccess(user) {
    logger.info('sign in success', user);
    this.setState({ error: null });
    // There are other sign in challenges we don't cover here.
    // SMS_MFA, SOFTWARE_TOKEN_MFA, NEW_PASSWORD_REQUIRED, MFA_SETUP ...
    if (user.challengeName === 'SMS_MFA' || user.challengeName === 'SOFTWARE_TOKEN_MFA') {
      this.changeState('confirmSignIn', user);
    } else {
      this.checkContact(user);
    }
  }

  signInError(err) {
    logger.info('sign in error', err);
    /*
      err can be in different structure:
        1) plain text message;
        2) object { code: ..., message: ..., name: ... }
    */
    this.setState({ error: err.message || err });
  }

  checkContact(user) {
    Auth.verifiedContact(user)
      .then(data => {
        if (!JS.isEmpty(data.verified)) {
          this.changeState('signedIn', user);
        } else {
          user = Object.assign(user, data);
          this.changeState('verifyContact', user);
        }
      });
  }

  render() {
    const { authState, authData } = this.props;
    if (!['signIn', 'signedOut', 'signedUp'].includes(authState)) { return null; }
    const { error } = this.state;
    return (
      <Content >
        <Grid>
          <Form  >
            <Item stackedLabel style={{ marginTop: 30 }}>
              <Label>Email (Username)</Label>
              <Input
                type="text"
                autoCapitalize="none"
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
                autoFocus
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                type="password"
                secureTextEntry
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <Button block success onPress={() => this.signIn()}>
              <Text>Sign In</Text>
            </Button>
            {error &&
              <Text>{error}</Text>
            }
            <Row>
              <Button transparent onPress={() => this.changeState('signUp')}>
                <Text> Sign Up</Text>
              </Button>
              <Button transparent onPress={() => this.changeState('forgotPassword')} >
                <Text>Forgot Password</Text>
              </Button>
            </Row>
          </Form>
        </Grid>
      </Content>
    )
  }
}