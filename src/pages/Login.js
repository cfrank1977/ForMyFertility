import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { Authenticator } from 'aws-amplify-react-native';
import { Auth, Hub, Logger } from 'aws-amplify';
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

const logger = new Logger('Navigator');

export class Login extends Component {

  constructor(props) {
    super(props);
    this.loadUser = this.loadUser.bind(this);
    this.state = { user: null }
  }

  componentDidMount() {
    this.loadUser(); // The first check
    Hub.listen('auth', (data) => {
      const { payload } = data;
      this.loadUser();
      logger.info('on Auth event', payload.event);
      console.log('A new auth event has happened: ', payload.data.username + ' has ' + payload.event);
    })
  }

  componentWillUnmount() {
    Hub.remove('auth', (data) => {
      const { payload } = data;
      console.log('A new auth event has happened: ' + payload.event);
    })
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