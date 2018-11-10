import React, { Component } from 'react';
import { ProgressViewIOS, Picker } from 'react-native';
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
for (let i = youngFertility; i >= oldFertility; i--) {
    ages.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export default class Age extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
    };
    
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 1 of 7</Text>
                    <ProgressViewIOS progress={0.125} progressTintColor={'#86B2CA'} />
                </View>
                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>What year were you born?</Text>
                    <Control.Picker model=".age" >
                        {ages}
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("YearTrying")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}