import React, { Component } from 'react';
import {
    ProgressViewIOS,
} from 'react-native'
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    DeckSwiper,
    Footer,
    Header,
    Item,
    Title,
    Picker,
    Icon,
    Left,
    Right,
    Text,
    View
} from 'native-base';
import { API, graphqlOperation } from 'aws-amplify';

const cards = [
    {
        text: 'Have you been trying to get pregnate for at least 1 year (unprotected and regular intercourse)?',
        name: 'yearChildlessSex',
        value1: 'yes',
        value2: 'no',
        label1: 'Yes',
        lavel2: 'No',
        progressBarProgress: 0.1
    },
    {
        text: 'Have you ever been pregnate before?',
        name: 'hadPregnancy',
        value1: 'yes',
        value2: 'no',
        label1: 'Yes',
        lavel2: 'No'
    },
    {
        text: 'Have you ever had an ectopic pregnancy?',
        name: 'hadEctopicPregnancy',
        value1: 'yes',
        value2: 'no',
        label1: 'Yes',
        lavel2: 'No'
    },
    {
        text: 'Have you ever had a miscarriage?',
        name: 'miscarriages',
        value1: 'yes',
        value2: 'no',
        label1: 'Yes',
        lavel2: 'No'
    },
    {
        text: 'Have you ever given birth before (live birth)?',
        name: 'liveBirth',
        value1: 'yes',
        value2: 'no',
        label1: 'Yes',
        lavel2: 'No'
    },

    {
        text: 'Have you and/or are you currently undergoing IVF?',
        name: 'currentIVF',
        value1: 'yes',
        value2: 'no',
        label1: 'Yes',
        lavel2: 'No'
    }


]

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

    render() {
        return (
            <Container>
                <Header />
                <Content >
                    <Card style={{ elevation: 3 }}>
                        <CardItem header bordered >
                            <View style={{ alignSelf: "center" }}>
                                <Text>Question 1 of 8</Text>
                                <ProgressViewIOS progress={0.125} progressTintColor={'#86B2CA'} />
                            </View>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>Have you been trying to get pregnate for at least 1 year (unprotected and regular intercourse)?</Text>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        iosHeader='No'
                                        iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                        style={{ width: undefined }}
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.yearChildlessSex}
                                        onValueChange={(yearChildlessSex) => { this.setState({ yearChildlessSex }); }}
                                    >
                                        <Picker.Item label={'No'} value={'no'} />
                                        <Picker.Item label={'Yes'} value={'yes'} />
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Icon name="medkit" style={{ color: '#ED4A6A' }} />
                        </CardItem>
                    </Card>
                </Content>
                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                    <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="arrow-back" />
                        <Text>Swipe Left</Text>
                    </Button>
                    <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Text>Swipe Right</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>
                <Footer />
            </Container>

        );
    }
}