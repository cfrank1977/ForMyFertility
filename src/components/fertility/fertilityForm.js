import { createStackNavigator  } from "react-navigation";

import Age from './questions/Age';
import YearTrying from './questions/YearTrying';
import Pregnant from './questions/Pregnant';
import Ectopic from './questions/ectopic';
import Miscarriage from './questions/Miscarriage';
import LiveBirth from './questions/liveBirth';
import CurrentIVF from './questions/currentIVF';

export default createStackNavigator({
    Age: { screen: Age},
    YearTrying: { screen: YearTrying},
    Pregnant: { screen: Pregnant},
    Ectopic: { screen: Ectopic},
    Miscarriage: { screen: Miscarriage},
    LiveBirth: { screen: LiveBirth},
    CurrentIVF: { screen: CurrentIVF},
  });