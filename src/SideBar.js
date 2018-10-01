import React from "react";
import { Container, Content, Text, List, ListItem} from "native-base";
export default class SideBar extends React.Component {
  
  render() {
     routes = this.props.items.map(x => x.routeName)
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

