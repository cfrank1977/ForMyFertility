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
    navigation.navigate("Partner")
}

const WhichGynecologicalCauses = ({ navigation, fertilityQuestions, dispatch }) => (
    <Content >
        <View style={{ alignSelf: "center", margin: 10 }}>
            <Text> Questions {fertilityQuestions.questionNum} of {fertilityQuestions.questionTot}</Text>
            <Progress.Bar progress={(fertilityQuestions.questionNum / fertilityQuestions.questionTot)} width={200} />
        </View>
        <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
            <Text>Which of the following describe your condition or diagnosis most appropriately? </Text>
            <Control.Picker model=".whichGynecologicalCauses">
                <Picker.Item label='Endometriosis' value='endometriosis' />
                <Picker.Item label='Tubal Factor' value='tubalfactor' />
                <Picker.Item label='Ovarian Dysfunction' value='ovariandysfunction' />
                <Picker.Item label='Polycystic Ovarian Syndrome' value='pcos' />
                <Picker.Item label='Diminished Ovarian Reserve' value='diminishedovarianreserve' />
                <Picker.Item label='Uterine Factor' value='uterinefactor' />
                <Picker.Item label='Cancer Chemotherapy' value='cancerchemotherapy' />
                <Picker.Item label='Myomas' value='myomas' />
                <Picker.Item label='Immunological Problems' value='immunological' />
                <Picker.Item label='Chromosomal Abnormalities' value='chromosomalabnormalities' />
                <Picker.Item label='Infection of the Tubes' value='tubesinfection' />
                <Picker.Item label='Infection of the Uterus' value='uterusinfection' />
            </Control.Picker>
            <View>
                <Button full rounded primary onPress={() => handleSubmit({ navigation, fertilityQuestions, dispatch })}>
                    <Text>Next</Text>
                </Button>
            </View>
        </Form>
    </Content>
);
export default connect(({ nav, fertilityQuestions }) => ({ nav, fertilityQuestions }))(WhichGynecologicalCauses); 