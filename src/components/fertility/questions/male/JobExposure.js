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

export class JobExposure extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('Stressed')
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
                    <Text>Are you regularly exposed to any of the following at your job?</Text>
                    <Control.Picker model=".jobexposure" >
                        <Picker.Item label="Temperatures above 80 degree Faranheit" value="80F" />
                        <Picker.Item label="Solvents, oil-based paints or cleaning componds" value="solvents" />
                        <Picker.Item label="Agricultural Pesticides" value="pesticides" />
                        <Picker.Item label="Engine Exhaust" value="exhaust" />
                        <Picker.Item label="Laptop on your lap" value="laptop" />
                        <Picker.Item label="Receipt paper" value="recieptpaper" />
                        <Picker.Item label="Soldering" value="soldering" />
                        <Picker.Item label="Metal particulates or fumes" value="fumes" />
                        <Picker.Item label="Long periods of sitting" value="sitting" />
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

export default connect(mapStateToProps)(JobExposure);
