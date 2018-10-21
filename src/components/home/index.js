

import { createDrawerNavigator, createSwitchNavigator } from "react-navigation";

import Questions from "../fertility/fertilityForm";
import HomeScreen from "./HomeScreen";
import SignIn from "../login/BottomTabs"
import SignUp from "../login/SignUp"

const AuthDrawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    
  },
 
);
const AppDrawer = createDrawerNavigator(
  {
    Questions: { screen: Questions },
    Home: { screen: HomeScreen },
    
  },
 
);
  
  export default createSwitchNavigator(
  {

    App:AppDrawer,
    Auth:AuthDrawer,
  },
  {
    initialRouteName:'Auth',
  });
