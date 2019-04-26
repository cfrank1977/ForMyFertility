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

let questionNum, questionTot;
let newheight = [];
let height = [
    { key: 1, value: '4 feet' },
    { key: 2, value: "4 feet 1 inches"},
    { key: 3, value: "4 feet 2 inches"},
    { key: 4, value: "4 feet 3 inches"},
    { key: 5, value: "4 feet 4 inches"},
    { key: 6, value: "4 feet 5 inches"},
    { key: 7, value: "4 feet 6 inches"},
    { key: 8, value: "4 feet 7 inches"},
    { key: 9, value: "4 feet 8 inches"},
    { key: 10, value: "4 feet 9 inches"},
    { key: 11, value: "4 feet 10 inches"},
    { key: 12, value: "4 feet 11 inches"},
    { key: 1, value: '5 feet' },
    { key: 2, value: "5 feet 1 inches"},
    { key: 3, value: "5 feet 2 inches"},
    { key: 4, value: "5 feet 3 inches"},
    { key: 5, value: "5 feet 4 inches"},
    { key: 6, value: "5 feet 5 inches"},
    { key: 7, value: "5 feet 6 inches"},
    { key: 8, value: "5 feet 7 inches"},
    { key: 9, value: "5 feet 8 inches"},
    { key: 10, value: "5 feet 9 inches"},
    { key: 11, value: "5 feet 10 inches"},
    { key: 12, value: "5 feet 11 inches"},
    { key: 1, value: '6 feet' },
    { key: 2, value: "6 feet 1 inches"},
    { key: 3, value: "6 feet 2 inches"},
    { key: 4, value: "6 feet 3 inches"},
    { key: 5, value: "6 feet 4 inches"},
    { key: 6, value: "6 feet 5 inches"},
    { key: 7, value: "6 feet 6 inches"},
    { key: 8, value: "6 feet 7 inches"},
    { key: 9, value: "6 feet 8 inches"},
    { key: 10, value: "6 feet 9 inches"},
    { key: 11, value: "6 feet 10 inches"},
    { key: 12, value: "6 feet 11 inches"},
    { key: 1, value: '7 feet' }
];



export class Height extends React.Component {
    componentDidMount() {
        newheight = height.map(obj => {
            let newObj = <Picker.Item key={obj.key} label={obj.value} value={obj.value} />
            return newObj
        })
    }

    handleSubmit({ questionNum, dispatch, navigation }) {
        dispatch(actions.change('maleQuestions.questionNum', ++questionNum));
        navigation.navigate('Weight')
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
                    <Text>How tall are you in feet and inches?</Text>
                    <Control.Picker model=".height" >
                        {newheight}
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

export default connect(mapStateToProps)(Height);
