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

export default class SingletonMultiBirth extends Component {
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
                    <Text>Was the birth:</Text>
                    <Control.Picker model=".singletonmulitbirth" >
                        <Picker.Item label='Singleton' value='singleton' />
                        <Picker.Item label='Multiple' value='multiple' />
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("AmountPerfectHealth")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}