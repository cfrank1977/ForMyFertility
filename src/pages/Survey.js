import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Body, Header, Content, Spinner, Text } from 'native-base';
import { actions } from 'react-redux-form/native';
import { Auth } from 'aws-amplify';
import FormData from '../lib/formdata';
import MaleFormData from '../lib/maleformdata';


export class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        gender: 'female',
      },
      maleformdata: {
        gender: 'male',
      },
    };
  }
  async  componentDidMount() {
    const { dispatch } = this.props;
    const navigation = this.props.navigation;
    let username = await Auth.currentAuthenticatedUser();
    const gender = this.props.navigation.state.params.gender;

    if (gender === 'female') {
      let formdata = new FormData();
      formdata = await formdata.getFormData(username.username);
      if (Object.keys(formdata).length !== 0) {
        formdata.questionNum = 1;
        formdata.questionTot = 6; // 6 for female and 26 for male
        dispatch(actions.load('fertilityQuestions', formdata));
        this.setState({ formdata: formdata });
      }
      navigation.navigate('Age')

    } else if (gender === 'male') {
      let maleformdata = new MaleFormData();
      maleformdata = await maleformdata.getMaleFormData(username.username);
      if (Object.keys(maleformdata).length !== 0) {
        maleformdata.questionNum = 1;
        maleformdata.questionTot = 26; // 6 for female and 26 for male
        dispatch(actions.load('maleQuestions', maleformdata));
        this.setState({ maleformdata: maleformdata });
      }
      navigation.navigate('AgeM')
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          {(this.state.formdata.gender === 'female' || this.state.formdata.gender === 'male') ? (<Text>Loaded</Text>) : (<Body><Spinner /><Text>Loading Data</Text></Body>)}
        </Content>
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

export default connect(mapStateToProps)(Survey);