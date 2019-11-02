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

let amountperfecthealth = [];
for (let i = 1; i < 20; i++) {
    amountperfecthealth.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export default class AmountPerfectHealth extends Component {
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
                    <Text>Of these, how many were in perfect health?</Text>
                    <Control.Picker model=".amountperfecthealth">
                    {amountperfecthealth}
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("EmbryosFinalCycle")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}