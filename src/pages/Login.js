import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { Authenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';
import Survey from './Survey';
import { SignIn, ConfirmSignIn, SignUp, ConfirmSignUp, ForgotPassword, ForgotPasswordReset } from '../components/auth';

const CustomAuthenticator = props => (
  <Authenticator hideDefault>
    <SignIn />
    <ConfirmSignIn />
    <SignUp />
    <ConfirmSignUp />
    <ForgotPassword />
    <ForgotPasswordReset />
  </Authenticator>
)

export class Login extends Component {

  constructor(props) {
    super(props);
    this.loadUser = this.loadUser.bind(this);
    this.state = { user: null }
  }

  componentDidMount() {
    this.loadUser(); // The first check
  }

  loadUser() {
    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user: user }))
      .catch(err => this.setState({ user: null }));
  }

  render() {
    const { user } = this.state;
    return (
      <Container>
        {!user && <CustomAuthenticator />}
        {user && <Survey {...this.props} />}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav,
    fertilityQuestions: state.fertilityQuestions,
    maleQuestions: state.maleQuestions
  };
}

export default connect(mapStateToProps)(Login);