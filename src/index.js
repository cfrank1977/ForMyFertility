import React from "react";

import { createDrawerNavigator, createSwitchNavigator } from "react-navigation";

import Questions from "./QuesitonsForm";
import HomeScreen from "./HomeScreen.js";
import SignIn from "./BottomTabs"
import SignUp from "./SignUp"
import SideBar from "./SideBar";

const AuthDrawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
const AppDrawer = createDrawerNavigator(
  {
    Questions: { screen: Questions },
    SignOut: { screen: SignIn },
    
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
  
  export default createSwitchNavigator(
  {

    App:AppDrawer,
    Auth:AuthDrawer,
  },
  {
    initialRouteName:'Auth',
  });

