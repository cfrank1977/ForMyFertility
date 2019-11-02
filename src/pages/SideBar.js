import React from "react";
import { Image } from "react-native";
import { connect } from 'react-redux';
import { Container, Content, Header, Text, List, ListItem } from "native-base";
const routes = ["Home", "SignOut", "Profile" ];

export class SideBar extends React.Component {
  render() {
    return (
      <Container>
      <Header />
        <Content>
        <Image
            source={{
              uri: "http://www.formyfertility.com/img/fertility-in-women4.jpg"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
          </Image>
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

export default connect(mapStateToProps)(SideBar);