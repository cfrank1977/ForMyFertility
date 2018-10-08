import { createBottomTabNavigator } from 'react-navigation'

import HomeScreen from "./HomeScreen.js";
import SignIn from './SignIn'
import SignUp from './SignUp'

const config = {
    SignIn: { screen: SignIn},
    SignUp: { screen: SignUp}
}

export default createBottomTabNavigator(config)