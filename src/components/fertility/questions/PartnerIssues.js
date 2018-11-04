import React, { Component } from 'react';
import { ProgressViewIOS, Picker } from 'react-native';
import {
    Control,
    Form,
    actions,
} from 'react-redux-form/native';
import {
    Button, 
    Content,
    Text,
    View
} from 'native-base';

export default class PartnarIssues extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
    }
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 5 of 7</Text>
                    <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                </View>
                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>Which of the following describes his condition most-appropriately?</Text>
                    <Control.Picker model=".whichPartnerIssue">
                        <Picker.Item label='Azoospermia' value='azoospermia' />
                        <Picker.Item label='Tubal Factor' value='tubalfactor' />
                        <Picker.Item label='Idiopathy' value='idiopathy' />
                        <Picker.Item label='Low Sperm Count' value='oligospermia' />
                        <Picker.Item label='Poor Sperm Quality' value='poorspermquality' />
                        <Picker.Item label='Poor Sperm Motility' value='poorspermmotility' />
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("CurrentIVF")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}