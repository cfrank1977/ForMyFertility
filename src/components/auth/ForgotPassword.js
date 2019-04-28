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

const logger = new Logger('ForgotPassword');

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.sendCode = this.sendCode.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = { error: null }
  }

  changeState(state, data) {
    const { onStateChange } = this.props;
    if (onStateChange) {
      onStateChange(state, data);
    }
  }

  sendCode() {
    const username = this.props.authData || this.state.username;
    logger.info('resend code to ' + username);
    Auth.forgotPassword(username)
      .then(data => this.sendSuccess(username, data))
      .catch(err => this.handleError(err));
  }

  sendSuccess(username, data) {
    logger.info('sent code for ' + username, data);
    this.changeState('forgotPasswordReset', username);
  }

  handleError(err) {
    logger.info('forgot password send code error', err);
    this.setState({ error: err.message || err });
  }

  render() {
    const { authState, authData } = this.props;
    if (authState !== 'forgotPassword') { return null; }

    const { error } = this.state;

    return (
      <Content>
        <Grid>
          <Form  >
            <Item stackedLabel style={{ marginTop: 30 }}>
              <Label>Email (Username)</Label>
              <Input
                type="text"
                autoCapitalize="none"
                defaultValue={authData || ''}
                onChangeText={(username) => this.setState({ username })}
                autoFocus
              />
            </Item>
            <Button block success onPress={() => { this.sendCode() }}>
              <Text>
                Send password reset code
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
            </Row>
          </Form>
        </Grid>
      </Content>
    )
  }
}