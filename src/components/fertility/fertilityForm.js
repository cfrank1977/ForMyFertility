import { createStackNavigator  } from "react-navigation";

import Age from './questions/Age';
import YearTrying from './questions/YearTrying';
import Pregnant from './questions/Pregnant';
import Ectopic from './questions/Ectopic';
import Miscarriage from './questions/Miscarriage';
import LiveBirth from './questions/LiveBirth';
import CurrentIVF from './questions/CurrentIVF';

export default createStackNavigator({
    Age: { screen: Age},
    YearTrying: { screen: YearTrying},
    AmountYearsTrying: { screen: AmountYearsTrying},
    Pregnant: { screen: Pregnant},
    Ectopic: { screen: Ectopic},
    Miscarriage: { screen: Miscarriage},
    LiveBirth: { screen: LiveBirth},
    AmountChildren: { screen: AmountChildren},
    GynecologicalCauses: { screen: GynecologicalCauses},
    WhichGynecologicalCauses: { screen: WhichGynecologicalCauses},
    CurrentIVF: { screen: CurrentIVF},
  });