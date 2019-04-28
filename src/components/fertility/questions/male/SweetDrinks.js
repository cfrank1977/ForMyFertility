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

export class SweetDrinks extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('Soy')
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
                    <Text>How often do you drink sugar-sweetened beverages (sodas, energy drinks, etc)?</Text>
                    <Control.Picker model=".drinks" >
                        <Picker.Item label='More than two a day' value='>twoday' />
                        <Picker.Item label='Two a day' value='=twoday' />
                        <Picker.Item label='One a day' value='oneday' />
                        <Picker.Item label='A few a week' value='fewweek' />
                        <Picker.Item label='Less than one a week' value='<1week' />
                        <Picker.Item label='Never' value='never' />
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

export default connect(mapStateToProps)(SweetDrinks);
