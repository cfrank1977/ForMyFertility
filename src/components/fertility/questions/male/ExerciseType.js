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
    Content,
    Button,
    Text,
    View
} from 'native-base';

export class ExerciseType extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('Enhancers')
    }

    render() {
        questionNum = this.props.maleQuestions ? this.props.maleQuestions.questionNum : 1;
        questionTot = this.props.maleQuestions ? this.props.maleQuestions.questionTot : 1;;
        const { dispatch } = this.props;
        const navigation = this.props.navigation;
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text> Questions {questionNum} of {questionTot}</Text>
                    <Progress.Bar progress={(questionNum / questionTot)} width={200} />
                </View>
                <Form model="maleQuestions" >
                    <Text>What type of exercise do you do? (check all that apply)</Text>
                    <Control.Picker model=".exercisetype" >
                        <Picker.Item label="Run / Treadmill" value="run" />
                        <Picker.Item label="Team sports" value="teamsports" />
                        <Picker.Item label="Lift weights / Crossfit" value="weights" />
                        <Picker.Item label="Walking / elliptical" value="walking" />
                        <Picker.Item label="Cycling" value="cycling" />
                        <Picker.Item label="Swimming" value="swimming" />
                        <Picker.Item label="Hiking / Mountain" value="hicking" />
                        <Picker.Item label="Other" value="other" />
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.handleSubmit({ questionNum, dispatch, navigation })}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav,
        maleQuestions: state.maleQuestions
    };
}

export default connect(mapStateToProps)(ExerciseType);
