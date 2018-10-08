import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
    ProgressViewIOS,
    Picker,
} from 'react-native'
import {
    Content,
    Text,
    View
} from 'native-base';


export default class Questions extends Component {

    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 5 of 7</Text>
                    <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                </View>
                <Text>Have you ever had a miscarriage?</Text>
                <Picker
                    selectedValue={this.props.props.miscarriages}
                    onValueChange={(miscarriages) => { this.setState({ miscarriages }); }}
                >
                    <Picker.Item label={'No'} value={'no'} />
                    <Picker.Item label={'Yes'} value={'yes'} />
                </Picker>
            </Content>
        );
    }
}