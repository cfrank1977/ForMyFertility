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

let sauna = [];
let curYear = (new Date()).getFullYear();
let youngFertility = curYear - 13;
let oldFertility = curYear - 60;
let questionNum, questionTot;
for (let i = youngFertility; i >= oldFertility; i--) {
    sauna.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export class Sauna extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('PregnantM')
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
                    <Text>How often do you use the hot tub, steam room or sauna?</Text>
                    <Control.Picker model=".sauna" >
                        <Picker.Item label='Less than once a month' value='<1m' />
                        <Picker.Item label='A couple times a month' value='couple' />
                        <Picker.Item label='1-2 times a week' value='1-2w' />
                        <Picker.Item label='3-5 times a week' value='3-5w' />
                        <Picker.Item label='Every day' value='everyday' />
                        <Picker.Item label='Multiple times a day' value='multiple' />
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

export default connect(mapStateToProps)(Sauna);
