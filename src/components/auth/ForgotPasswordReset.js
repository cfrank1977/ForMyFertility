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

const logger = new Logger('ForgotPasswordReset');

export default class ForgotPasswordReset extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = { error: null }
  }

  changeState(state, data) {
    const { onStateChange } = this.props;
    if (onStateChange) {
      onStateChange(state, data);
    }
  }

  submit() {
    const username = this.props.authData;
    if (!username) {
      this.setState({ error: 'missing username' });
      return;
    }

    const { code, password } = this.state;
    logger.info('reset password for ' + username);
    Auth.forgotPasswordSubmit(username, code, password)
      .then(data => this.submitSuccess(username, data))
      .catch(err => this.handleError(err));
  }

  submitSuccess(username, data) {
    logger.info('forgot password reset success for ' + username, data);
    this.changeState('signIn', username);
  }

  handleError(err) {
    logger.info('forgot password reset error', err);
    this.setState({ error: err.message || err });
  }

  render() {
    const { authState } = this.props;
    if (authState !== 'forgotPasswordReset') { return null; }

    const { error } = this.state;

    return (
        <Content>
          <Grid>
            <Form  >
              <Item stackedLabel style={{ marginTop: 30 }}>
                <Label>Code</Label>
                <Input 
                  type="text"
                  onChangeText={(code) => this.setState({ code })}
                  autoFocus
                />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input 
                  type="password"
                  autoCapitalize="none"
                  onChangeText={(password) => this.setState({ password })}
                  autoFocus
                />
              </Item>
              <Button block success onPress={() => { this.submit() }}>
                  <Text>
                  Reset password
                  </Text>
              </Button>
              {error &&
                <Text>{error}</Text>
              }
              <Row>
              
                <Button transparent onPress={() => this.changeState('forgotPassword')} >
                  <Text>
                  Back to forgot password
                  </Text>
                </Button>
              </Row>
            </Form>
          </Grid>
        </Content>
    )
  }
}