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
                    <Text>Question 4 of 7</Text>
                    <ProgressViewIOS progress={0.5} progressTintColor={'#86B2CA'} />
                </View>
                <Text>Have you ever had an ectopic pregnancy?</Text>
                <Picker
                    selectedValue={this.props.props.hadEctopicPregnancy}
                    onValueChange={(hadEctopicPregnancy) => { this.setState({ hadEctopicPregnancy }); }}
                >
                    <Picker.Item label={'No'} value={'no'} />
                    <Picker.Item label={'Yes'} value={'yes'} />
                </Picker>
            </Content>
        );
    }
}