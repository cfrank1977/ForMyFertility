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
    Content,
    Text,
    View
} from 'native-base';


export default class MoreThanOneIVFConceived extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
    }
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 7 of 7</Text>
                    <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                </View>
                
                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                <Text>Have you ever had more than one IVF-conceived live birth?</Text>
                    <Control.Picker model=".morethanoneivfconceived">
                        <Picker.Item label='No' value='no' />
                        <Picker.Item label='Yes' value='yes' />
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("Report")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}