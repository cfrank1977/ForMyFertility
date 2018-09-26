import React, { Component } from 'react';
import {
    SegmentedControlIOS,
    StyleSheet
} from 'react-native';
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
    Form,
    Item,
    Picker,
    Icon,
    Left,
    Text,
    View
} from 'native-base';
import { API, graphqlOperation } from 'aws-amplify';

const cards = [
    {
        text: 'What is your Gender/',
        name: 'gender',
        value1: 'male',
        value2: 'female',
        label1: 'Male',
        lavel2: 'Female'
    },
    {
        text: 'Have you experienced at least 1 year of involuntary childlessness following unprotected and regular intercourse?',
        name: 'yearChildlessSex',
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
    },
    {
        text: 'Have you ever had a pregnancy?',
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
        text: 'Have you had a previous live birth?',
        name: 'liveBirth',
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
        text: 'Is the husband/partner suffering from any male cause(s) of subfertility?',
        name: 'maleSubfertility',
        value1: 'yes',
        value2: 'no',
        label1: 'Yes',
        lavel2: 'No'
    },
    

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
            maleSubfertilitCondition: 'none'
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
                <Content>
                    <View>
                        <DeckSwiper
                            dataSource={cards}
                            renderItem={item =>
                                <Card style={{ elevation: 3 }}>
                                    <CardItem>
                                        <Left>

                                            <Body>
                                                <Text>{item.text}</Text>
                                                <Text note>For My Fertility</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Form>
                                            <Item picker>
                                                <Picker
                                                    mode="dropdown"
                                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                                    style={{ width: undefined }}
                                                    placeholder= {item.label1}
                                                    placeholderStyle={{ color: "#bfc6ea" }}
                                                    placeholderIconColor="#007aff"
                                                   
                                                    gender={this.state.gender}
                                                    onValueChange={(gender) => { this.setState({ gender }); }}
                                                >
                                                    <Picker.Item label={item.label1} value= {item.value1} />
                                                    <Picker.Item label= {item.lavel2} value= {item.value2} />
                                        
                                                </Picker>
                                            </Item>
                                        </Form>
                                    </CardItem>
                                    <CardItem>
                                        <Button success iconRight onPress={this.onSubmit.bind(this)}>
                                            <Text>Next</Text>
                                            <Icon name="ios-arrow-forward" />
                                        </Button>
                                    </CardItem>
                                </Card>
                            }
                        />
                    </View>
                </Content>
                <Footer />
            </Container>

        );
    }
}

const styles = StyleSheet.create({

    content: {
        flex: 1,
        width: 300,
        margin: 10,
    }
});