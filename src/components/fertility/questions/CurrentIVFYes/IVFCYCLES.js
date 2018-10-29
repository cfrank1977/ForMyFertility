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

let ivfcycles = [];
for (let i = 1; i < 50; i++) {
    ivfcycles.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export default class IVFCYCLES extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
    }
    render() {
        return (
            <Content>
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 2 of 7</Text>
                    <ProgressViewIOS progress={0.25} progressTintColor={'#86B2CA'} />
                </View>
                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>How many treatment cycles have you completed to date?</Text>
                    <Control.Picker model=".ivfcycles">
                        {ivfcycles}
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("Hormone")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form >
            </Content>
        );
    }
}