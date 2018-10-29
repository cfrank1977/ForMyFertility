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


export default class CurrentIVF extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            NextPage: "IVFConceived",
        };
      }
    handleSubmit(answer) {
        console.log(answer);
        if (answer === "yes") {
            this.NextPage = "Eggs"
        } else {
            this.NextPage = "IVFConceived"
        }
        return answer;
    }
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 7 of 7</Text>
                    <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                </View>

                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>Have you and/or are you currently undergoing IVF?</Text>
                    <Control
                        component={Picker}
                        mapProps={{
                            onResponderGrant: ({ onFocus }) => onFocus,
                            onResponderRelease: ({ onBlur }) => onBlur,
                            selectedValue: ({ modelValue }) => this.handleSubmit(modelValue),
                            onValueChange: ({ onChange }) => onChange,
                            onChange: undefined,
                        }}
                        model=".currentIVF"
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