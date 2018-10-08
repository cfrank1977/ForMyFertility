import React, { Component } from 'react';
import { Alert } from 'react-native';
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
import Questions from './Questions'

export default class QuestionsContainer extends Component {

    alert = (msg) => {
        console.log(msg)
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => Alert.alert(
                                'You pressed back',
                                'Some how we go back'
                            )}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Previous</Title>
                    </Body>
                    <Right />
                </Header>
                <Content >
                    <Questions />
                        <Button full rounded success
                        style={{ marginTop: 30 }}
                            onPress={() => Alert.alert(
                                'You pressed next',
                                'Some how we go to the next question'
                            )}>
                            <Text>Next</Text>
                        </Button>
                </Content>
            </Container>
        );
    }
}