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

export class MedConditions extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('MaleReport')
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
                    <Text>Have you ever been diagnosed with any of the following medical conditions?</Text>
                    <Control.Picker model=".medconditions" >
                        <Picker.Item label="Varicocele" value="varicocele" />
                        <Picker.Item label="Hypogonadism or Low Testosterone" value="lowt" />
                        <Picker.Item label="Tuberculosis" value="tuberculosis" />
                        <Picker.Item label="Cystic Fibrosis" value="cysticfibrosis" />
                        <Picker.Item label="Cancer" value="cancer" />
                        <Picker.Item label="STI" value="sti" />
                        <Picker.Item label="Mumps" value="mumps" />
                        <Picker.Item label="Inguinal hernia (surgically repaired)" value="hernia" />
                        <Picker.Item label="Maldescended testicle" value="maldescended" />
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

export default connect(mapStateToProps)(MedConditions);
