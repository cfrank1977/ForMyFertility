import { createBottomTabNavigator } from 'react-navigation'

import SignIn from '../signin/SignIn'
import SignUp from '../signup/SignUp'

const config = {
    SignIn: { screen: SignIn},
    SignUp: { screen: SignUp}
}

export default createBottomTabNavigator(config)