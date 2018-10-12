
import React, { Component } from 'react';
import {
  Container,
  Button,
  Text,
  Body,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label
} from 'native-base';

import { Auth } from 'aws-amplify'

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      const newUser = await Auth.signUp({
        username: this.state.email,
        password: this.state.password
      });
      this.setState({
        newUser
      });
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
      await Auth.signIn(this.state.email, this.state.password);

      this.props.screenProps.authenticate(true)
      this.props.navigation.navigate('FertilityForm');

    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  renderConfirmationForm() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Form>
            <Body style={{ marginTop: 10 }}>
              <Text>
                We take securing and protecting
                your information very seriously.
                Which is why we're asking you to
                create a free account before we
                ask you private questions about your
                body and fertility history.
            </Text>
            </Body>
            <Item stackedLabel style={{ marginTop: 30 }}>
              <Label>Confirmation Code</Label>
              <Input
                onChange={this.handleChange}
                value={this.state.confirmationCode}
              />
            </Item>

          </Form>
          <Button
            block
            success
            disabled={!this.validateForm()}
            isLoading={this.state.isLoading}
            onPress={this.handleConfirmationSubmit}
          >
            <Text>
              Verify
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }

  renderForm() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Form>
            <Body style={{ marginTop: 10 }}>
              <Text>
                We take securing and protecting
                your information very seriously.
                Which is why we're asking you to
                create a free account before we
                ask you private questions about your
                body and fertility history.
            </Text>
            </Body>
            <Item stackedLabel style={{ marginTop: 30 }}>
              <Label>Email</Label>
              <Input
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
            <Item stackedLabel last>
              <Label>Confirm Password</Label>
              <Input
                secureTextEntry
                onChangeText={(confirmPassword) => { this.setState({ confirmPassword }); }}
                value={this.state.confirmPassword}
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
              Signup
              </Text>
          </Button>
        </Content>
      </Container>
    );
  }

  render() {
    return (
      <Container className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </Container>
    );
  }
}