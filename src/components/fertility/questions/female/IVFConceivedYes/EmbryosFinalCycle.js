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

let embryosfinalcycle = [];
for (let i = 1; i < 20; i++) {
    embryosfinalcycle.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

function handleSubmit({ navigation, fertilityQuestions, dispatch, }) {
    dispatch(actions.change('fertilityQuestions.questionNum', ++fertilityQuestions.questionNum));
    navigation.navigate("MoreThanOneIVFConceived")
}

const EmbryosFinalCycle = ({ navigation, fertilityQuestions, dispatch }) => (
    <Content >
        <View style={{ alignSelf: "center", margin: 10 }}>
            <Text> Questions {fertilityQuestions.questionNum} of {fertilityQuestions.questionTot}</Text>
            <Progress.Bar progress={(fertilityQuestions.questionNum / fertilityQuestions.questionTot)} width={200} />
        </View>
        <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
            <Text>How many embryos were replaced on the final cycle leading to this successful birth?</Text>
            <Control.Picker model=".embryosfinalcycle">
                {embryosfinalcycle}
            </Control.Picker>
            <View>
                <Button full rounded primary onPress={() => handleSubmit({ navigation, fertilityQuestions, dispatch })}>
                    <Text>Next</Text>
                </Button>
            </View>
        </Form>
    </Content>
);
export default connect(({ nav, fertilityQuestions }) => ({ nav, fertilityQuestions }))(EmbryosFinalCycle); 