import React, { Component } from 'react';
import {
  Container,
  Button,
  Text,
  Header,
  Content,
} from 'native-base';

import { Auth } from 'aws-amplify';

export default class SignOut extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    Auth.signOut();
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