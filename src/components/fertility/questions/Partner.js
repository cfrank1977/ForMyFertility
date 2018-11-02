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

export default class Partner extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            NextPage: "CurrentIVF",
        };
      }
    handleSubmit(answer) {
        console.log(answer);
        if (answer === "yes") {
            this.NextPage = "PartnerIssues"
        } else {
            this.NextPage = "CurrentIVF"
        }
        return answer;
    }
    render() {
        return (

            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 1 of 7</Text>
                    <ProgressViewIOS progress={0.125} progressTintColor={'#86B2CA'} />
                </View>
                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>Is the husband/partner suffering from any male cause(s) of subfertility?</Text>
                    <Control
                    component={Picker}
                        mapProps={{
                            onResponderGrant: ({ onFocus }) => onFocus,
                            onResponderRelease: ({ onBlur }) => onBlur,
                            selectedValue: ({ modelValue }) => this.handleSubmit(modelValue),
                            onValueChange: ({ onChange }) => onChange,
                            onChange: undefined,
                        }} 
                         model=".partner"
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