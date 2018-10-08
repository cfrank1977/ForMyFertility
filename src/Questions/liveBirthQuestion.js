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
                    <Text>Question 6 of 7</Text>
                    <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                </View>
                <Text>Have you ever given birth before (live birth)?</Text>
                <Picker
                    selectedValue={this.props.props.liveBirth}
                    onValueChange={(liveBirth) => { this.setState({ liveBirth }); }}
                >
                    <Picker.Item label={'No'} value={'no'} />
                    <Picker.Item label={'Yes'} value={'yes'} />
                </Picker>
            </Content>
        );
    }
}