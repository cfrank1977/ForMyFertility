import React, { Component } from 'react';
import { ProgressViewIOS, Picker } from 'react-native';

import {
    Control,
    Form,
    actions,
} from 'react-redux-form/native';
import {
    Content,
    Text,
    View
} from 'native-base';


export default class Pregnant extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
      }
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 3 of 7</Text>
                    <ProgressViewIOS progress={0.375} progressTintColor={'#86B2CA'} />
                </View>
            <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                <Text>Have you been pregnant before?</Text>
                <Control.Picker model=".hadPregnancy">
                    <Picker.Item label='No' value='no' />
                    <Picker.Item label='Yes' value='yes' />
                </Control.Picker>
            </Form >
            </Content>
        );
    }
}