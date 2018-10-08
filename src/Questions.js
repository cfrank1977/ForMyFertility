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
        console.log(this.props.props.age)
        let question = this.props.props.question
        if (question === 'age') {
            return (
                <Content >
                    <View style={{ alignSelf: "center", margin: 10 }}>
                        <Text>Question 1 of 7</Text>
                        <ProgressViewIOS progress={0.125} progressTintColor={'#86B2CA'} />
                    </View>
                    <Text>What year were you born?</Text>
                    <Picker
                        selectedValue={this.props.props.age}
                        
                        onValueChange={(age) => { this.setState({ age }); }}
                        >
                        {this.props.props.ages}
                    </Picker>
                </Content>
            );
        }
        if (question === 'yearChildlessSex') {
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
        if (question === 'hadPregnancy') {
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
        if (question === 'hadEctopicPregnancy') {
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
        if (question === 'miscarriages') {
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
        if (question === 'liveBirth') {
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
        if (question === 'currentIVF') {
            return (
                <Content >
                    <View style={{ alignSelf: "center", margin: 10 }}>
                        <Text>Question 7 of 7</Text>
                        <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                    </View>
                    <Text>Have you and/or are you currently undergoing IVF?</Text>
                    <Picker
                        selectedValue={this.props.props.currentIVF}
                        onValueChange={(currentIVF) => { this.setState({ currentIVF }); }}
                    >
                        <Picker.Item label={'No'} value={'no'} />
                        <Picker.Item label={'Yes'} value={'yes'} />
                    </Picker>
                </Content>
            );
        }
    }
}