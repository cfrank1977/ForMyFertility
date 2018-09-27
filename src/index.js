import React from "react";

import { createDrawerNavigator } from "react-navigation";

import Questions from "./Questions.js";
import HomeScreen from "./HomeScreen.js";
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import SideBar from "./SideBar";

const TopNavBarRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Questions: { screen: Questions },
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    
  },
 
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default TopNavBarRouter;

