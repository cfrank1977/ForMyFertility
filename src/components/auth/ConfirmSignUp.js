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
import { Auth, Logger } from 'aws-amplify';

const logger = new Logger('ConfirmSignUp');

export default class ConfirmSignUp extends Component {
  constructor(props) {
    super(props);
    this.confirmSignUp = this.confirmSignUp.bind(this);
    this.resendCode = this.resendCode.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = { message: null, error: null }
  }

  changeState(state, data) {
    const { onStateChange } = this.props;
    if (onStateChange) {
      onStateChange(state, data);
    }
  }

  confirmSignUp() {
    const username = this.props.authData || this.state.username;
    const code = this.state.code;
    logger.info('confirm sign up with ' + code);
    Auth.confirmSignUp(username, code)
      .then(() => this.confirmSuccess(username))
      .catch(err => this.handleError(err));
  }

  resendCode() {
    const username = this.props.authData || this.state.username;
    logger.info('resend code to ' + username);
    Auth.resendSignUp(username)
      .then(() => this.setState({ message: 'Code sent' }))
      .catch(err => this.handleError(err));
  }

  confirmSuccess(username) {
    logger.info('confirm sign up success with ' + username);
    this.setState({ message: null, error: null });
    this.changeState('signIn', username);
  }

  handleError(err) {
    logger.info('confirm sign up error', err);
    this.setState({ message: null, error: err.message || err });
  }

  render() {
    const { authState, authData } = this.props;
    if (authState !== 'confirmSignUp') { return null; }

    const { message, error } = this.state;

    return (
      <Content>
          <Form>
            <Item stackedLabel style={{ marginTop: 30 }}>
              <Label>Email (Username)</Label>
              <Input
                type="text"
                autoCapitalize="none"
                defaultValue={authData || ''}
                onChangeText={(username) => this.setState({ username })}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Code</Label>
              <Input
                type="text"
                onChangeText={(code) => this.setState({ code })}
                autoFocus
              />
            </Item>
            <Row>
              <Button primary onPress={() => this.confirmSignUp() }>
                <Text>Confirm</Text>
              </Button>
              <Button success onPress={() => this.resendCode() }>
                <Text>Resend</Text>
              </Button>
            </Row>
            {message &&
              <Text>{message}</Text>
            }
            {error &&
              <Text>{error}</Text>
            }
            <Row>
              <Button transparent onPress={() => this.changeState('signIn')} >
                <Text>
                  Back to sign in
                  </Text>
              </Button>
            </Row>
          </Form>
        
      </Content>
    )
  }
}