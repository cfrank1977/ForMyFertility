import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
    Picker,
} from 'react-native'
import {
    Container,
    Content,
    Button,
    Body,
    Footer,
    Header,
    Left,
    Right,
    Title,
    Icon,
    Text,
    View
} from 'native-base';
import { API, graphqlOperation } from 'aws-amplify';
import Questions from './Questions'

export default class QuestionsContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            gender: 'female',
            age: 1996,
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

    componentDidMount() {
        let ages = [];
        for (let i = 2005; i >= 1955; i--) {
            ages.push(<Picker.Item key={i} label={`${i}`} value={i} />)
        }
        this.setState({
            ages: ages
        });
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

    alert = (msg) => {
        console.log(msg)
    }

    handleChange(value) {
        console.log(value)
        this.setState({age: value})
    }

    render() {
        let next = 'yearChildlessSex'
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.actions.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Previous</Title>
                    </Body>
                    <Right />
                </Header>
                <Content >
                    <Questions props={this.state} />
                    <Button full rounded success
                        style={{ marginTop: 30 }}
                        onPress={() => this.setState((state) => {return {question: 'yearChildlessSex'};})}>

                        <Text>Next</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}