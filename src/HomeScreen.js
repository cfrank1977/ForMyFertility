import React from "react";
import { Container, Content, Text, Header, Button, Footer } from "native-base";
import bottomTabs from './BottomTabs'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header />
          
        <Content >
          <Header>
            <Text>I want to:</Text>
          </Header>
          
            <Button full rounded primary
            style={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("SignIn")}>
              <Text>Get pregnant</Text>
            </Button>
          
            <Button full rounded disabled style={{ marginTop: 20 }}>
              <Text>Follow my pregnancy</Text>
            </Button>
          
            <Button full rounded disabled style={{ marginTop: 20 }}>
              <Text>Track my cycle</Text>
            </Button>

          <Footer>
            <Text>By continuing, you agree to
              the Privacy Policy and the Terms of Service
          </Text>
          </Footer>

        </Content>
      </Container>
    );
  }
}