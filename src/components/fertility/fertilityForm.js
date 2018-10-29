import { createStackNavigator  } from "react-navigation";

import Age from './questions/Age';
import AmountChildren from './questions/AmountChildren';
import AmountYearsTrying from './questions/AmountYearsTrying';
import CurrentIVF from './questions/CurrentIVF';
import Ectopic from './questions/Ectopic';
import GynecologicalCauses from './questions/GynecologicalCauses';
import IVFConceived from './questions/IVFConceived';
import LiveBirth from './questions/LiveBirth';
import Miscarriage from './questions/Miscarriage';
import Partner from './questions/Partner';
import PartnerIssues from './questions/PartnerIssues';
import Pregnant from './questions/Pregnant';
import WhichGynecologicalCauses from './questions/WhichCauses';
import YearTrying from './questions/YearTrying';
import DonorEggs from './questions/CurrentIVFYes/DonorEggs';
import DonorEmbryos from './questions/CurrentIVFYes/DonorEmbryos';
import DonorSperm from './questions/CurrentIVFYes/DonorSperm';
import Eggs from './questions/CurrentIVFYes/Eggs';
import Embryos from './questions/CurrentIVFYes/Embryos';
import EmbryosTransfer from './questions/CurrentIVFYes/EmbryosTransfer';
import FrozenEmbryos from './questions/CurrentIVFYes/FrozenEmbryos';
import GestationalCarrier from './questions/CurrentIVFYes/GestationalCarrier';
import Hormone from './questions/CurrentIVFYes/Hormone';
import ICSI from './questions/CurrentIVFYes/ICSI';
import IVFCYCLES from './questions/CurrentIVFYes/IVFCYCLES';
import AmountPerfectHealth from './questions/IVFConceivedYes/AmountPerfectHealth';
import EmbryosFinalCycle from './questions/IVFConceivedYes/EmbryosFinalCycle';
import MoreThanOneIVFConceived from './questions/IVFConceivedYes/MoreThanOneIVFConceived';
import SingletonMultiBirth from './questions/IVFConceivedYes/SingletonMultiBirth';
import Report from './Report';

export default createStackNavigator({
    Age: { screen: Age },
    AmountChildren: { screen: AmountChildren },
    AmountYearsTrying: { screen: AmountYearsTrying },
    CurrentIVF: { screen: CurrentIVF },
    Ectopic: { screen: Ectopic },
    GynecologicalCauses: { screen: GynecologicalCauses },
    IVFConceived: { screen: IVFConceived },
    LiveBirth: { screen: LiveBirth },
    Miscarriage: { screen: Miscarriage },
    Partner: { screen: Partner },
    PartnerIssues: { screen: PartnerIssues },
    Pregnant: { screen: Pregnant },
    WhichGynecologicalCauses: { screen: WhichGynecologicalCauses },
    YearTrying: { screen: YearTrying },
    DonorEggs: { screen: DonorEggs },
    DonorEmbryos: { screen: DonorEmbryos },
    DonorSperm: { screen: DonorSperm },
    Eggs: { screen: Eggs },
    Embryos: { screen: Embryos },
    EmbryosTransfer: { screen: EmbryosTransfer },
    FrozenEmbryos: { screen: FrozenEmbryos },
    GestationalCarrier: { screen: GestationalCarrier },
    Hormone: { screen: Hormone },
    ICSI: { screen: ICSI },
    IVFCYCLES: { screen: IVFCYCLES },
    AmountPerfectHealth: { screen: AmountPerfectHealth },
    EmbryosFinalCycle: { screen: EmbryosFinalCycle },
    MoreThanOneIVFConceived: { screen: MoreThanOneIVFConceived },
    SingletonMultiBirth: { screen: SingletonMultiBirth },
    Report: { screen: Report },
  });