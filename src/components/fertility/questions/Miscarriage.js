import React, { Component } from 'react';
import { ProgressViewIOS, Picker } from 'react-native';
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


export default class Miscarriage extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
    }
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 5 of 7</Text>
                    <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                </View>

                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>Have you ever had a miscarriage?</Text>
                    <Control.Picker model=".miscarriages">
                        <Picker.Item label='No' value='no' />
                        <Picker.Item label='Yes' value='yes' />
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("Ectopic")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form >
            </Content>
        );
    }
}