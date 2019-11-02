import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import {
  Container,
  Button,
  Icon,
  Text,
  Header,
  Content,
  Item,
  Input,
  Label
} from 'native-base';
import { getStore, getState } from '../store/storeHelper';
import { updateProfile } from '../authorizers/actions';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
    this.storeListener = this.storeListener.bind(this);
    this.store = getStore();
    this.state = getState(this.store);
  }

  componentDidMount() {
    this.unsubscribeStore = this.store.subscribe(this.storeListener);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  handleInputChange(name, value) {
    const profile = Object.assign({}, this.state.profile);
    profile[name] = value;
    this.setState({ profile: profile });
  }

  async saveProfile() {
    let user = await Auth.currentAuthenticatedUser();
    const { profile } = this.state;
    if (!user) {
      this.handleError('No user to save to');
      return;
    }
    await Auth.updateUserAttributes(user, profile)
      .then(data => this.saveSuccess(data))
      .catch(err => this.handleError(err));
    user = await Auth.currentAuthenticatedUser({
      bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
    this.props.navigation.navigate('Home')
  }

 

  saveSuccess(data) {
    logger.info('saved user profile', data);
    this.store.dispatch(updateProfile(this.state.profile));
  }

  handleError(error) {
    logger.info('load / save user attributes error', error);
    this.setState({ error: error.message || error });
  }

  storeListener() {
    logger.info('redux notification');
    const state = getState(this.store);
    logger.info('state from redux', state);
    this.setState({ user: state.user, profile: state.profile });
  }

  render() {
    const { profile, error } = this.state;
    return (
      <Container>
        <Content padder >
          <Item stackedLabel style={{ marginTop: 30 }}>
            <Label>First Name</Label>
            <Input
              type="text"
              defaultValue={profile.given_name}
              onChangeText={(given_name) => this.handleInputChange('given_name', given_name)}
              autoFocus
            />
          </Item>
          <Item stackedLabel last>
            <Label>Last Name</Label>
            <Input
              type="text"
              defaultValue={profile.family_name}
              onChangeText={(family_name) => this.handleInputChange('family_name', family_name)}
            />
          </Item>
          <Button block success onPress={() => { this.saveProfile() }}>
            <Text>
              Save
                  </Text>
          </Button>
          {error &&
            <Item error>
              <Input>{error}</Input>
              <Icon name='close-circle' />
            </Item>
          }

        </Content>
      </Container>
    )
  }
}