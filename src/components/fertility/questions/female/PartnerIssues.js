import React from 'react';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import { Picker } from 'react-native';
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

function handleSubmit({ navigation, fertilityQuestions, dispatch, }) {
    dispatch(actions.change('fertilityQuestions.questionNum', ++fertilityQuestions.questionNum));
    navigation.navigate("CurrentIVF")
}

const PartnarIssues = ({ navigation, fertilityQuestions, dispatch }) => (
    <Content >
        <View style={{ alignSelf: "center", margin: 10 }}>
            <Text> Questions {fertilityQuestions.questionNum} of {fertilityQuestions.questionTot}</Text>
            <Progress.Bar progress={(fertilityQuestions.questionNum / fertilityQuestions.questionTot)} width={200} />
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
                <Button full rounded primary onPress={() => handleSubmit({ navigation, fertilityQuestions, dispatch })}>
                    <Text>Next</Text>
                </Button>
            </View>
        </Form>
    </Content>
);
export default connect(({ nav, fertilityQuestions }) => ({ nav, fertilityQuestions }))(PartnarIssues); 