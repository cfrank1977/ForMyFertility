import React, { Component } from 'react';
import {
    ProgressViewIOS,
    Picker,
} from 'react-native'
import {
    Container,
    Content,
    Body,
    Footer,
    Header,
    Text,
    View
} from 'native-base';
import { API, graphqlOperation } from 'aws-amplify';

export default class Questions extends Component {
    constructor() {
        super();
        this.state = {
            gender: 'female',
            age: 18,
            yearChildlessSex: 'no',
            yearsSubfertile: 0,
            currentIVF: 'no',
            hadPregnancy: 'no',
            hadEctopicPregnancy: 'no',
            liveBirth: 'no',
            miscarriages: 'no',
            maleSubfertility: 'no',
            maleSubfertilitCondition: 'none',
            question: 'age',
            ages: [],
        }
    }

    onSubmit() {
        let query = `
            mutation add {
                createQuestions(input: {
                    gender: "${this.state.gender}",
                    age: ${this.state.age},
                    yearChildlessSex: "${this.state.yearChildlessSex}",
                    yearsSubfertile: ${this.state.yearsSubfertile},
                    currentIVF: "${this.state.currentIVF}",
                    hadPregnancy: "${this.state.hadPregnancy}",
                    hadEctopicPregnancy: "${this.state.hadEctopicPregnancy}",
                    liveBirth: "${this.state.liveBirth}",
                    miscarriages: "${this.state.miscarriages}",
                    maleSubfertility: "${this.state.maleSubfertility}",
                    maleSubfertilitCondition: "${this.state.maleSubfertilitCondition}",
                }) { id }
            }
        `

        API.graphql(graphqlOperation(query))
        console.log(`Submit button pressed! API JSON ${JSON.stringify(this.state)}`)
    }

    componentDidMount() {
        let ages = [];
        for (let i = 2005; i >= 1955; i--) {
            ages.push(<Picker.Item key={i} label={`${i}`} value={i} />)
        }
        this.setState({
            ages: ages
        });

    }

    render() {
        if (this.state.question === 'age') {
            return (
                <Content >
                    <View style={{ alignSelf: "center", margin: 10 }}>
                        <Text>Question 1 of 7</Text>
                        <ProgressViewIOS progress={0.125} progressTintColor={'#86B2CA'} />
                    </View>
                    
                        <Text>What year were you born?</Text>
                        <Picker
                            selectedValue={this.state.age}
                            onValueChange={age => this.setState({ age })}>
                            {this.state.ages}
                        </Picker>
                   

                </Content>
            );
        }
        if (question === 'yearChildlessSex') {
            return (
                <Content >
                    <View style={{ alignSelf: "center", margin: 10 }}>
                        <Text>Question 3 of 7</Text>
                        <ProgressViewIOS progress={0.25} progressTintColor={'#86B2CA'} />
                    </View>
                    <Text>Have you been trying to get pregnate for at least 1 year (unprotected and regular intercourse)?</Text>
                    <Picker
                        selectedValue={this.state.yearChildlessSex}
                        onValueChange={(yearChildlessSex) => { this.setState({ yearChildlessSex }); }}
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
                        selectedValue={this.state.hadPregnancy}
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
                        selectedValue={this.state.hadEctopicPregnancy}
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
                        selectedValue={this.state.miscarriages}
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
                        selectedValue={this.state.liveBirth}
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
                        selectedValue={this.state.currentIVF}
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