import { createBottomTabNavigator } from 'react-navigation'

import HomeScreen from "./HomeScreen.js";
import SignIn from './SignIn'
import SignUp from './SignUp'

const config = {
    Home: { screen: HomeScreen },
    SignIn: { screen: SignIn},
    SignUp: { screen: SignUp}
}

export default createBottomTabNavigator(config)