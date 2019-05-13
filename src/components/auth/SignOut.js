import React, { Component } from 'react';
import { Container, Button, Text, Content } from 'native-base';
import { Auth, Logger } from 'aws-amplify';
const logger = new Logger('SignOut');

export default class SignOut extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    Auth.signOut()
      .then(() => logger.info('sign out success'))
      .catch(err => logger.info('sign out error', err));
    const navigation = this.props.navigation;
    navigation.navigate('Home')
  }

  render() {
    return (
      <Container>
        <Content padder >
          <Button block success onPress={() => this.signOut()}>
            <Text>
              Sign Out
          </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}