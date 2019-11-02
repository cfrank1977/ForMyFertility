import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Text, Content } from 'native-base';
import { Auth, Logger } from 'aws-amplify';
const logger = new Logger('SignOut');

export  class SignOut extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  async signOut() {
    const { onStateChange } = this.props;
    await Auth.signOut({global: true})
      .then(() => onStateChange('signedOut'))
      .catch(err => logger.info('sign out error', err));
      this.props.rerender()
    // const navigation = this.props.navigation;
    // navigation.navigate('Home')
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

export default connect(mapStateToProps)(SignOut);