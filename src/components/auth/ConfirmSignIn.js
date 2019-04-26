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

const logger = new Logger('ConfirmSignIn');

export default class ConfirmSignIn extends Component {
  constructor(props) {
    super(props);
    this.confirmSignIn = this.confirmSignIn.bind(this);
    this.checkContact = this.checkContact.bind(this);
    this.changeState = this.changeState.bind(this);
    this.inputs = {};
    this.state = {
      error: null,
      code: null
    }
  }

  changeState(state, data) {
    const { onStateChange } = this.props;
    if (onStateChange) {
      onStateChange(state, data);
    }
  }

  confirmSignIn() {
    const user = this.props.authData;
    const { code } = this.state;
    logger.info('confirm sign in with ' + code);
    const mfaType = user.challengeName === 'SOFTWARE_TOKEN_MFA'
      ? 'SOFTWARE_TOKEN_MFA'
      : null;
    Auth.confirmSignIn(user, code, mfaType)
      .then(() => this.confirmSuccess(user))
      .catch(err => this.confirmError(err));
  }

  confirmSuccess(user) {
    logger.info('confirm sign in success', user);
    this.setState({ error: '' });

    this.checkContact(user);
  }

  confirmError(err) {
    logger.info('confirm sign in error', err);
    this.setState({ error: err.message || err });
  }

  checkContact(user) {
    Auth.verifiedContact(user)
      .then(data => {
        logger.info('verified contacts', data);
        if (!JS.isEmpty(data.verified)) {
          this.changeState('signedIn', user);
        } else {
          user = Object.assign(user, data);
          this.changeState('verifyContact', user);
        }
      })
      .catch(err => {
        logger.info('check verified contact error', err);
      });
  }

  render() {
    const { authState } = this.props;
    if (authState !== 'confirmSignIn') { return null; }

    const style = {
      width: '20rem',
      links: { fontSize: '0.9em' },
      button: { width: '100%' },
      alert: { fontSize: '0.8em' }
    }

    const { error } = this.state;

    return (
      <Content>
        <Grid>
          <Form  >
            <Item stackedLabel last>
              <Label>Code</Label>
              <Input
                type="text"
                onChangeText={(code) => this.setState({ code })}
                value={this.state.code}
                autoFocus
              />
            </Item>
            <Button primary onClick={this.confirmSignIn}>
              <Text>
                Confirm
                </Text>
            </Button>
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
        </Grid>
      </Content>
    )
  }
}