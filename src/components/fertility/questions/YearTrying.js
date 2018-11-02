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

export default class YearTrying extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            NextPage: "Pregnant",
        };
      }
    handleSubmit(answer) {
        console.log(answer);
        if (answer === "yes") {
            this.NextPage = "AmountYearsTrying"
        } else {
            this.NextPage = "Pregnant"
        }
        return answer;
    }
    render() {
        return (
            <Content>
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 2 of 7</Text>
                    <ProgressViewIOS progress={0.25} progressTintColor={'#86B2CA'} />
                </View>
                <Form model="fertilityQuestions" onSubmit={values => console.log(values)}>
                    <Text>Have you been trying to get pregnate for at least 1 year (unprotected and regular intercourse)?</Text>
                    <Control
                        component={Picker}
                        mapProps={{
                            onResponderGrant: ({ onFocus }) => onFocus,
                            onResponderRelease: ({ onBlur }) => onBlur,
                            selectedValue: ({ modelValue }) => this.handleSubmit(modelValue),
                            onValueChange: ({ onChange }) => onChange,
                            onChange: undefined,
                        }}
                        model=".yearChildlessSex"
                    >
                        <Picker.Item label='No' value='no' />
                        <Picker.Item label='Yes' value='yes' />
                    </Control>
                    <View>
                        <Button type="submit" full rounded primary onPress={() => this.props.navigation.navigate(this.NextPage)}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}