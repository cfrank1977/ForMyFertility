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


export default class YearTrying extends Component {

    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 2 of 7</Text>
                    <ProgressViewIOS progress={0.25} progressTintColor={'#86B2CA'} />
                </View>
                <Text>Have you been trying to get pregnate for at least 1 year (unprotected and regular intercourse)?</Text>
                <Picker
                    selectedValue={this.props.props.yearChildlessSex}
                    onValueChange={yearChildlessSex => Alert.alert(`${this.props.props.yearChildlessSex}`)}
                >
                    <Picker.Item label={'No'} value={'no'} />
                    <Picker.Item label={'Yes'} value={'yes'} />
                </Picker>
            </Content>
        );
    }
}