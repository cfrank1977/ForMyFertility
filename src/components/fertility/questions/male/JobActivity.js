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

let jobactivity = [];
let curYear = (new Date()).getFullYear();
let youngFertility = curYear - 13;
let oldFertility = curYear - 60;
let questionNum, questionTot;
for (let i = youngFertility; i >= oldFertility; i--) {
    jobactivity.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export class JobActivity extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('JobExposure')
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
                    <Text>How active is your job?</Text>
                    <Control.Picker model=".jobactivity" >
                        <Picker.Item label='No active (sitting all day)' value='notactive' />
                        <Picker.Item label='Lightly active (intermittent)' value='intermittent' />
                        <Picker.Item label='Moderately active (on feet most of the day)' value='moderately' />
                        <Picker.Item label='Active (physically demanding)' value='active' />
                        <Picker.Item label='Heavily active (strenuous physical labor)' value='heavy' />
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

export default connect(mapStateToProps)(JobActivity);
