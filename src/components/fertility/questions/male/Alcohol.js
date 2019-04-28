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

let alcohol = [];
let curYear = (new Date()).getFullYear();
let youngFertility = curYear - 13;
let oldFertility = curYear - 60;
let questionNum, questionTot;
for (let i = youngFertility; i >= oldFertility; i--) {
    alcohol.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export class Alcohol extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('Cigarettes')
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
                    <Text>How often do you drink alcohol?</Text>
                    <Control.Picker model=".alcohol" >
                        <Picker.Item label='Never' value='never' />
                        <Picker.Item label='Light (less than 1-2 drinks a week)' value='light' />
                        <Picker.Item label='Social (couple drinks a week)' value='social' />
                        <Picker.Item label='Party (heavy drinking couple times a month)' value='party' />
                        <Picker.Item label='Party hard (heavy drinking once a week or so)' value='partyhard' />
                        <Picker.Item label='Heavy drinking (multiple times a week)' value='heavydrinking' />
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

export default connect(mapStateToProps)(Alcohol);
