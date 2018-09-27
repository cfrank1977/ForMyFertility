
import React, { Component } from 'react';
import {
  Container,
  Body,
  Button,
  Text,
  Header,
  Content,
  Form,
  Icon,
  Title,
  Left,
  Right,
  Item,
  Input,
  Label
} from 'native-base';
import { Auth } from 'aws-amplify'

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true })
    try {
      await Auth.signIn(this.state.email, this.state.password);
      console.log('successful sign in!')
      this.props.screenProps.authenticate(true)
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <Container>
      <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Sign In</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                autoFocus = {true}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => { this.setState({ email }); }}
                value={this.state.email}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                onChangeText={(password) => { this.setState({ password }); }}
                value={this.state.password}
              />
            </Item>
          </Form>
          <Button
            block
            success
            disabled={!this.validateForm()}
            isLoading={this.state.isLoading}
            onPress={this.handleSubmit}
          >
            <Text>
              Sign In
              </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}