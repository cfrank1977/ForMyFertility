import React, { Component } from 'react';
import {
    ProgressViewIOS,
    Picker,
} from 'react-native';
import {
    Control,
    Form,
    actions,
} from 'react-redux-form/native';
import {
    Button,
    Content,
    Text,
    View
} from 'native-base';

let children = [];
for (let i = 1; i < 20; i++) {
    children.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export default class AmountChildren extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
    }
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 6 of 7</Text>
                    <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                </View>
                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>How many children have you give birth to (live birth)?</Text>
                    <Control.Picker model=".amountChildren">
                    {children}
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("GynecologicalCauses")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}