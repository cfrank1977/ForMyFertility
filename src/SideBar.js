import React from "react";
import { Image } from "react-native";
import { Container, Content, Text, List, ListItem} from "native-base";
const routes = [ "SignIn", "SignUp", "Logout", "Questions"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

