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
    navigation.navigate("IVFConceived")
}

const FrozenEmbryos = ({ navigation, fertilityQuestions, dispatch }) => (
    <Content >
        <View style={{ alignSelf: "center", margin: 10 }}>
            <Text> Questions {fertilityQuestions.questionNum} of {fertilityQuestions.questionTot}</Text>
            <Progress.Bar progress={(fertilityQuestions.questionNum / fertilityQuestions.questionTot)} width={200} />
        </View>
        <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
            <Text>Would you be using fresh or frozen embryos?</Text>
            <Control.Picker model=".frozenembryos">
                <Picker.Item label='Fresh' value='fresh' />
                <Picker.Item label='Frozen' value='frozen' />
            </Control.Picker>
            <View>
                <Button full rounded primary onPress={() => handleSubmit({ navigation, fertilityQuestions, dispatch })}>
                    <Text>Next</Text>
                </Button>
            </View>
        </Form>
    </Content>
);
export default connect(({ nav, fertilityQuestions }) => ({ nav, fertilityQuestions }))(FrozenEmbryos);