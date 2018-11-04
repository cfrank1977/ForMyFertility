import React, { Component } from 'react';
import {
    Control,
    Form,
    actions,
} from 'react-redux-form/native';
import {
    ProgressViewIOS,
    Picker,
} from 'react-native'
import {
    Button,
    Content,
    Text,
    View
} from 'native-base';


export default class Ectopic extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
    }
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 4 of 7</Text>
                    <ProgressViewIOS progress={0.5} progressTintColor={'#86B2CA'} />
                </View>
                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                <Text>Have you ever had an ectopic pregnancy?</Text>
                    <Control.Picker model=".hadEctopicPregnancy">
                        <Picker.Item label='No' value='no' />
                        <Picker.Item label='Yes' value='yes' />
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("LiveBirth")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form >
            </Content>
        );
    }
}