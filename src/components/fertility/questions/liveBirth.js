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

export default class LiveBirth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NextPage: "GynecologicalCauses",
        };
      }
    handleSubmit(answer) {
        if (answer === "yes") {
            this.NextPage = "AmountChildren"
        } else {
            this.NextPage = "GynecologicalCauses"
        }
        return answer;
    }
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 6 of 7</Text>
                    <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                </View>
                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>Have you ever given birth before (live birth)?</Text>
                    <Control
                    component={Picker}
                        mapProps={{
                            onResponderGrant: ({ onFocus }) => onFocus,
                            onResponderRelease: ({ onBlur }) => onBlur,
                            selectedValue: ({ modelValue }) => this.handleSubmit(modelValue),
                            onValueChange: ({ onChange }) => onChange,
                            onChange: undefined,
                        }} 
                        model=".liveBirth"
                        >
                        <Picker.Item label='No' value='no' />
                        <Picker.Item label='Yes' value='yes' />
                    </Control>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate(this.NextPage)}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}