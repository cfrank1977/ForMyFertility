import React from "react";
import { Container, Body, Content, Text, Card, CardItem, Header, Left, Right, Button, Icon, Title } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Information about our app will be here!</Text>
              </Body>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

