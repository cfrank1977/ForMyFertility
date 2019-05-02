import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Left, Body, Right, Title, Icon, Header
} from 'native-base';
import {
  actions,
} from 'react-redux-form/native';
import {
  DrawerActions, NavigationActions
} from 'react-navigation';

export class TabHeader extends React.PureComponent {

  handleBackButton({ questionNum, dispatch, navigation }) {
    dispatch(actions.change('fertilityQuestions.questionNum', --questionNum));
    navigation.dispatch(NavigationActions.back())
  }
  render() {
    let questionNum = this.props.fertilityQuestions ? this.props.fertilityQuestions.questionNum : 1;
    const { dispatch } = this.props;
    const navigation = this.props.navigation;
    return (
      <Header>
        <Left style={{ flex: 1 }}>
          <Button
            transparent
            onPress={() => this.handleBackButton({ questionNum, dispatch, navigation })}
          >
            <Icon name="arrow-back" />
          </Button>
        </Left>


        <Body style={{ flex: 3 }}>
          <Title style={{ alignSelf: "center" }}>{this.props.title || 'For My Fertility'}</Title>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button
            transparent
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav,
    fertilityQuestions: state.fertilityQuestions
  };
}

export default connect(mapStateToProps)(TabHeader);