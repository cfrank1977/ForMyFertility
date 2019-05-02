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

let ivfcycles = [];
for (let i = 0; i < 50; i++) {
    ivfcycles.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

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
                <Picker.Item label='1st' value='1st' />
                <Picker.Item label='2nd' value='2nd' />
                <Picker.Item label='3rd' value='3rd' />
                <Picker.Item label='4th' value='4th' />
                <Picker.Item label='5th' value='5th' />
                <Picker.Item label='6th' value='6th' />
                <Picker.Item label='7th' value='7th' />
                <Picker.Item label='8th' value='8th' />
                <Picker.Item label='9th' value='9th' />
                <Picker.Item label='10th' value='10th' />
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