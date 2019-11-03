import React from "react";
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Header, Button, Footer } from "native-base";

export default class Home extends React.Component {
  handleSubmit({ navigation }, gender) {
        navigation.navigate('Survey', {
          gender: gender
        })
    }
  render() {
    const navigation = this.props.navigation;
    return (
      <Container tyle={styles.container}>
        <Content >
          <Header >
            <Text style={styles.textContent}>
              We're trying to have a baby:
              </Text>
          </Header>
          <Button full rounded primary
            className="her"
            style={{ margin: 20 }}
            onPress={() => this.handleSubmit({ navigation }, 'female')}>
            <Text>For Her</Text>
          </Button>
          <Button full rounded primary
            style={{ margin: 20 }}
            onPress={() => this.handleSubmit({ navigation }, 'male')}>
            <Text>For Him</Text>
          </Button>
          <Footer>
            <Text style={styles.textContent}>
              By continuing, you agree to ForMyFertility
              the Privacy Policy and the Terms of Service
          </Text>
          </Footer>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45ccb1',
  },
  textContent: {
    fontSize: 20,
    color: 'white',
  },
});
