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

let embryostransfered = [];
for (let i = 1; i < 20; i++) {
    embryostransfered.push(<Picker.Item key={i} label={`${i}`} value={i} />)
}

export default class EmbryosTransfer extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
    }
    render() {
        return (
            <Content>
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 2 of 7</Text>
                    <ProgressViewIOS progress={0.25} progressTintColor={'#86B2CA'} />
                </View>
                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>How many embryos do you anticipate you and/or your doctor will decide to transfer on your next cycle of IVF?</Text>
                    <Control.Picker model=".embryostransfered">
                        {embryostransfered}
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("ICSI")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}