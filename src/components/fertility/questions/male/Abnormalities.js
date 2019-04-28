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

export class Abnormalities extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('MedConditions')
    }

    render() {
        questionNum = this.props.maleQuestions ? this.props.maleQuestions.questionNum : 1;
        questionTot = this.props.maleQuestions ? this.props.maleQuestions.questionTot : 1;
        const { dispatch } = this.props;
        const navigation = this.props.navigation;
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text> Questions {questionNum} of {questionTot}</Text>
                    <Progress.Bar progress={(questionNum / questionTot)} width={200} />
                </View>
                <Form model="maleQuestions" >
                    <Text>Have you experienced any of the following in the past 6 months?</Text>
                    <Control.Picker model=".abnormalities" >
                        <Picker.Item label="Testicular pain (other than getting hit)" value="testpain" />
                        <Picker.Item label="Change in size of testicle" value="sizechange" />
                        <Picker.Item label="Sores or skin discoloration on gentals" value="sores" />
                        <Picker.Item label="Testicular lumps or bumps" value="bumps" />
                        <Picker.Item label="Drop of libido" value="libidodrop" />
                        <Picker.Item label="Difficulty achieving erection" value="ed" />
                        <Picker.Item label="Pain during erection or ejaculation" value="ejackpain" />
                        <Picker.Item label="Premature ejaculation" value="preejac" />
                        <Picker.Item label="None of the above" value="none" />
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

export default connect(mapStateToProps)(Abnormalities);
