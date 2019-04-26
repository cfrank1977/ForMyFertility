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
    if (fertilityQuestions.yearChildlessSex === "yes") {
        dispatch(actions.change('fertilityQuestions.questionTot', ++fertilityQuestions.questionTot));
        navigation.navigate("AmountYearsTrying")
    } else {
        navigation.navigate("Pregnant")
    }
}

const YearTrying = ({ navigation, fertilityQuestions, dispatch }) => (
    <Content>
        <View style={{ alignSelf: "center", margin: 10 }}>
            <Text> Questions {fertilityQuestions.questionNum} of {fertilityQuestions.questionTot}</Text>
            <Progress.Bar progress={(fertilityQuestions.questionNum / fertilityQuestions.questionTot)} width={200} />
        </View>
        <Form model="fertilityQuestions" onSubmit={values => console.log(values)}>
            <Text>Have you been trying to get pregnant for at least 1 year (unprotected and regular intercourse)?</Text>
            <Control.Picker model=".yearChildlessSex" >
                <Picker.Item label='No' value='no' />
                <Picker.Item label='Yes' value='yes' />
            </Control.Picker>
            <View>
                <Button type="submit" full rounded primary onPress={() => handleSubmit({ navigation, fertilityQuestions, dispatch })}>
                    <Text>Next</Text>
                </Button>
            </View>
        </Form>
    </Content>
)
export default connect(({ nav, fertilityQuestions }) => ({ nav, fertilityQuestions }))(YearTrying); 