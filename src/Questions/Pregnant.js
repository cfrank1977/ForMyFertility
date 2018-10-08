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


export default class Pregnant extends Component {

    render() {

        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 3 of 7</Text>
                    <ProgressViewIOS progress={0.375} progressTintColor={'#86B2CA'} />
                </View>
                <Text>Have you been pregnant before?</Text>
                <Picker
                    selectedValue={this.props.props.hadPregnancy}
                    onValueChange={(hadPregnancy) => { this.setState({ hadPregnancy }); }}
                >
                    <Picker.Item label={'No'} value={'no'} />
                    <Picker.Item label={'Yes'} value={'yes'} />
                </Picker>
            </Content>
        );
    }
}