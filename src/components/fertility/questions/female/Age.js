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

let ages = [];
let curYear = (new Date()).getFullYear();
let youngFertility = curYear - 13;
let oldFertility = curYear - 60;
let  questionNum, questionTot;
for (let i = youngFertility; i >= oldFertility; i--) {
    ages.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export class Age extends React.Component {

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('fertilityQuestions.questionNum', ++questionNum));
        navigation.navigate('YearTrying')
    }

    render() {
        questionNum = this.props.fertilityQuestions ? this.props.fertilityQuestions.questionNum : 1;
        questionTot = this.props.fertilityQuestions ? this.props.fertilityQuestions.questionTot : 1;;
        const { dispatch } = this.props;
        const navigation = this.props.navigation;
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text> Questions {questionNum} of {questionTot}</Text>
                    <Progress.Bar progress={(questionNum / questionTot)} width={200} />
                </View>
                <Form model="fertilityQuestions" >
                    <Text>What year were you born?</Text>
                    <Control.Picker model=".age" >
                        {ages}
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
      fertilityQuestions: state.fertilityQuestions
    };
  }

export default connect(mapStateToProps)(Age);
