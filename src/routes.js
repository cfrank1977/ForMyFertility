import React from "react";

import { createDrawerNavigator, createSwitchNavigator } from "react-navigation";

import FertilityForm from "./components/form/FertilityForm";
import HomeScreen from "./components/home/HomeScreen.js";
import SignIn from "./components/common/BottomTabs"
import SignUp from "./components/signup/SignUp"
import SideBar from "./components/common/SideBar";

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
    FertilityForm: { screen: FertilityForm },
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

