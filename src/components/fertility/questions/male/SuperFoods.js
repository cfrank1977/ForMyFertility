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

export class SuperFoods extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('Alcohol')
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
                    <Text>How many of the following "sperm-friendly superfoods" have you eaten in the past week?</Text>
                    <Control.Picker model=".superfoods" >
                        <Picker.Item label='Asparagus' value='asparagus' />
                        <Picker.Item label="Avacados" value="avacados" />
                        <Picker.Item label="Beans" value="beans" />
                        <Picker.Item label="Bell pepper" value="bellpepper" />
                        <Picker.Item label="Berries" value="berries" />
                        <Picker.Item label="Broccoli" value="broccoli" />
                        <Picker.Item label="Citrus or tropical fruit" value="citrusfruit" />
                        <Picker.Item label="Dark chocolate" value="darkchocolate" />
                        <Picker.Item label="Greens" value="greens" />
                        <Picker.Item label="Lean beef" value="leanbeef" />
                        <Picker.Item label="Lentils" value="lentils" />
                        <Picker.Item label="Mushrooms" value="Mushrooms" />
                        <Picker.Item label="Nuts" value="nuts" />
                        <Picker.Item label="Oats" value="oats" />
                        <Picker.Item label="Olive oil" value="oliveoil" />
                        <Picker.Item label="Poultry" value="poultry" />
                        <Picker.Item label="Salmon or tuna (wild caught)" value="salmon" />
                        <Picker.Item label="Seafood" value="Seafood" />
                        <Picker.Item label="Sweet potato" value="sweetpotato" />
                        <Picker.Item label="Tomato" value="tomato" />
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

export default connect(mapStateToProps)(SuperFoods);
