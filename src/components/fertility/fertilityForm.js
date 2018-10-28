import { createStackNavigator  } from "react-navigation";

import Age from './questions/Age';
import AmountChildren from './questions/AmountChildren';
import AmountYearsTrying from './questions/AmountYearsTrying'
import CurrentIVF from './questions/CurrentIVF';
import Ectopic from './questions/Ectopic';
import GynecologicalCauses from './questions/GynecologicalCauses'
import LiveBirth from './questions/LiveBirth';
import Miscarriage from './questions/Miscarriage';
import Partner from './questions/Partner';
import PartnerIssues from './questions/PartnerIssues';
import Pregnant from './questions/Pregnant';
import WhichGynecologicalCauses from './questions/WhichCauses'
import YearTrying from './questions/YearTrying';

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
    Partner: { screen: Partner},
    PartnerIssues: { screen: PartnerIssues },
    CurrentIVF: { screen: CurrentIVF},
  });