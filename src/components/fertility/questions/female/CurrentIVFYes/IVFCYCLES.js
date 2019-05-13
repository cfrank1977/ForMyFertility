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
    Content,
    Button,
    Text,
    View
} from 'native-base';

function handleSubmit({ navigation, fertilityQuestions, dispatch, }) {
    dispatch(actions.change('fertilityQuestions.questionNum', ++fertilityQuestions.questionNum));
    navigation.navigate("Hormone")
}

const IVFCYCLES = ({ navigation, fertilityQuestions, dispatch }) => (
    <Content>
        <View style={{ alignSelf: "center", margin: 10 }}>
            <Text> Questions {fertilityQuestions.questionNum} of {fertilityQuestions.questionTot}</Text>
            <Progress.Bar progress={(fertilityQuestions.questionNum / fertilityQuestions.questionTot)} width={200} />
        </View>
        <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
            <Text>Which IVF cycle would this be for you?</Text>
            <Control.Picker model=".ivfcycles">
                <Picker.Item label='1st' value={1} />
                <Picker.Item label='2nd' value={2} />
                <Picker.Item label='3rd' value={3} />
                <Picker.Item label='4th' value={4} />
                <Picker.Item label='5th' value={5} />
                <Picker.Item label='6th' value={6} />
                <Picker.Item label='7th' value={7} />
                <Picker.Item label='8th' value={8} />
                <Picker.Item label='9th' value={9} />
                <Picker.Item label='10th' value={10} />
            </Control.Picker>
            <View>
                <Button full rounded primary onPress={() => handleSubmit({ navigation, fertilityQuestions, dispatch })}>
                    <Text>Next</Text>
                </Button>
            </View>
        </Form>
    </Content>
);
export default connect(({ nav, fertilityQuestions }) => ({ nav, fertilityQuestions }))(IVFCYCLES); 