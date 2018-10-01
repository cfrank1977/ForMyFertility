import React, { Component } from 'react';
import {
    ProgressViewIOS,
    Picker,
} from 'react-native'
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    DatePicker,
    Footer,
    Header,
    Item,


    Icon,
    Left,
    Right,
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
        let question = 'miscarriages';

        if (question === 'age') {
            return (
                <Container>
                    <Header />
                    <Content >
                        <View style={{ alignSelf: "center" }}>
                            <Text>Question 1 of 8</Text>
                            <ProgressViewIOS progress={0.125} progressTintColor={'#86B2CA'} />
                        </View>

                        <Text>What year were you born?</Text>
                        <Picker
                            selectedValue={this.state.age}
                            onValueChange={age => this.setState({ age })}>
                            {this.state.ages}
                        </Picker>

                    </Content>
                    <Footer />
                </Container>
            );
        }
        if (question === 'yearChildlessSex') {
            return (
                <Container>
                    <Header />
                    <Content >
                        <View style={{ alignSelf: "center" }}>
                            <Text>Question 3 of 8</Text>
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
                    <Footer />
                </Container>
            );
        }
        if (question === 'hadPregnancy') {
            return (
                <Container>
                    <Header />
                    <Content >
                        <View style={{ alignSelf: "center" }}>
                            <Text>Question 3 of 8</Text>
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
                    <Footer />
                </Container>
            );
        }
        if (question === 'hadEctopicPregnancy') {
            return (
                <Container>
                    <Header />
                    <Content >
                        <View style={{ alignSelf: "center" }}>
                            <Text>Question 4 of 8</Text>
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
                    <Footer />
                </Container>
            );
        }
        if (question === 'miscarriages') {
            return (
                <Container>
                    <Header />
                    <Content >
                        <View style={{ alignSelf: "center" }}>
                            <Text>Question 5 of 8</Text>
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
                    <Footer />
                </Container>
            );
        }
    }
}