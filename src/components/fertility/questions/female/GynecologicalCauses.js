import React from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import * as Progress from 'react-native-progress';
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
    if (fertilityQuestions.gynecologicalCauses === "yes") {
        dispatch(actions.change('fertilityQuestions.questionTot', ++fertilityQuestions.questionTot));
        navigation.navigate("WhichGynecologicalCauses")
    } else {
        navigation.navigate("Partner")
    }
}

const GynecologicalCauses = ({ navigation, fertilityQuestions, dispatch }) => (
    <Content >
        <View style={{ alignSelf: "center", margin: 10 }}>
            <Text> Questions {fertilityQuestions.questionNum} of {fertilityQuestions.questionTot}</Text>
            <Progress.Bar progress={(fertilityQuestions.questionNum / fertilityQuestions.questionTot)} width={200} />
        </View>
        <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
            <Text>Do you have any known gynecological or other causes of infertility?</Text>
            <Control.Picker model=".gynecologicalCauses" >
                <Picker.Item label='No' value='no' />
                <Picker.Item label='Yes' value='yes' />
            </Control.Picker>
            <View>
                <Button full rounded primary onPress={() => handleSubmit({ navigation, fertilityQuestions, dispatch })}>
                    <Text>Next</Text>
                </Button>
            </View>
        </Form>
    </Content>
)

export default connect(({ nav, fertilityQuestions }) => ({ nav, fertilityQuestions }))(GynecologicalCauses); 