import React, { Component } from 'react';
import { Picker } from 'react-native';

import {
  track,
  Control,
  Form,
  actions,
} from 'react-redux-form/native';

class UserForm extends Component {
    handleSubmit(values) {
      this.props.dispatch(actions.submit('fertilityQuestions', values));
    }
    render() {
      return (
        <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
        <Control.Picker model=".gender">
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Control.Picker>
        </Form>
      );
    }
  }

  export default UserForm;