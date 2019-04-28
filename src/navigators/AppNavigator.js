import React from "react";
import {
    createStackNavigator, createDrawerNavigator, createSwitchNavigator
} from 'react-navigation';

import { Home, Login, TabHeader, SideBar, Profile } from '../pages';
import SignOut from '../components/auth/SignOut';
import Report from '../components/fertility/Report';
import MaleReport from '../components/fertility/MaleReport';

import {
    Age, AmountChildren, AmountYearsTrying, CurrentIVF, Ectopic,
    GynecologicalCauses, IVFConceived, LiveBirth, Miscarriage, Partner,
    PartnerIssues, Pregnant, WhichGynecologicalCauses, YearTrying, AgeM,
    Abnormalities, Alcohol, Cigarettes, Enhancers, Exercise,
    ExerciseType, Frequency, Height, JobActivity, JobExposure,
    Lube, Marijuana, MedConditions, PregnantM, Sauna,
    Sleep, Soy, Stressed, SuperFoods, SweetDrinks,
    TV, Trying, Vegetables, Weight
} from '../components/fertility/questions';
import {
    Eggs, Embryos, EmbryosTransfer, FrozenEmbryos, Hormone, ICSI, IVFCYCLES
} from '../components/fertility/questions/female/CurrentIVFYes';
import {
    AmountPerfectHealth, EmbryosFinalCycle, MoreThanOneIVFConceived, SingletonMultiBirth
} from '../components/fertility/questions/female/IVFConceivedYes';

const getNavigationConfig = title =>
    ({
        navigationOptions: () => ({
            header: props => <TabHeader {...props} title={title} />
        })
    });

const QuerstionsNavigator = createStackNavigator({
    Age: {
        screen: Age,
        ...getNavigationConfig('Age')
    },
    AmountChildren: {
        screen: AmountChildren,
        ...getNavigationConfig('Children Amount')
    },
    AmountYearsTrying: {
        screen: AmountYearsTrying,
        ...getNavigationConfig('Year Amount')
    },
    CurrentIVF: {
        screen: CurrentIVF,
        ...getNavigationConfig('IVF')
    },
    Ectopic: {
        screen: Ectopic,
        ...getNavigationConfig('Ectopic')
    },
    GynecologicalCauses: {
        screen: GynecologicalCauses,
        ...getNavigationConfig('Gynecological')
    },
    IVFConceived: {
        screen: IVFConceived,
        ...getNavigationConfig('Conceived via IVF')
    },
    LiveBirth: {
        screen: LiveBirth,
        ...getNavigationConfig('Given Birth')
    },
    Miscarriage: {
        screen: Miscarriage,
        ...getNavigationConfig('Miscarriage')
    },
    Partner: {
        screen: Partner,
        ...getNavigationConfig('Partner')
    },
    PartnerIssues: {
        screen: PartnerIssues,
        ...getNavigationConfig('Which Issues')
    },
    Pregnant: {
        screen: Pregnant,
        ...getNavigationConfig('Pregnant')
    },
    WhichGynecologicalCauses: {
        screen: WhichGynecologicalCauses,
        ...getNavigationConfig('Which Causes')
    },
    YearTrying: {
        screen: YearTrying,
        ...getNavigationConfig('Trying')
    },
    Eggs: {
        screen: Eggs,
        ...getNavigationConfig('Amount Eggs')
    },
    Embryos: {
        screen: Embryos,
        ...getNavigationConfig('Amount Embryos')
    },
    EmbryosTransfer: {
        screen: EmbryosTransfer,
        ...getNavigationConfig('Transfer Amount')
    },
    FrozenEmbryos: {
        screen: FrozenEmbryos,
        ...getNavigationConfig('Embryo Type')
    },
    Hormone: {
        screen: Hormone,
        ...getNavigationConfig('Hormone')
    },
    ICSI: {
        screen: ICSI,
        ...getNavigationConfig('ICSI')
    },
    IVFCYCLES: {
        screen: IVFCYCLES,
        ...getNavigationConfig('Cycle #')
    },
    AmountPerfectHealth: {
        screen: AmountPerfectHealth,
        ...getNavigationConfig('Health')

    },
    EmbryosFinalCycle: {
        screen: EmbryosFinalCycle,
        ...getNavigationConfig('Embryos Final Cycle')
    },
    MoreThanOneIVFConceived: {
        screen: MoreThanOneIVFConceived,
        ...getNavigationConfig('Multiple IVF Success')

    },
    SingletonMultiBirth: {
        screen: SingletonMultiBirth,
        ...getNavigationConfig('Birth Type')
    },
    Report: {
        screen: Report,
        ...getNavigationConfig('Reporting')
    },
    AgeM: {
        screen: AgeM,
        ...getNavigationConfig('Age')
    },
    Abnormalities: {
        screen: Abnormalities,
        ...getNavigationConfig('Abnormalities')
    },
    Alcohol: {
        screen: Alcohol,
        ...getNavigationConfig('Alcohol')
    },
    Cigarettes: {
        screen: Cigarettes,
        ...getNavigationConfig('Cigarettes')
    },
    Enhancers: {
        screen: Enhancers,
        ...getNavigationConfig('Enhancers')
    },
    Exercise: {
        screen: Exercise,
        ...getNavigationConfig('Exercise')
    },
    ExerciseType: {
        screen: ExerciseType,
        ...getNavigationConfig('Exercise Type')
    },
    Frequency: {
        screen: Frequency,
        ...getNavigationConfig('Frequency')
    },
    Height: {
        screen: Height,
        ...getNavigationConfig('Height')
    },
    JobActivity: {
        screen: JobActivity,
        ...getNavigationConfig('Job Activity')
    },
    JobExposure: {
        screen: JobExposure,
        ...getNavigationConfig('Job Exposure')
    },
    Lube: {
        screen: Lube,
        ...getNavigationConfig('Lube')
    },
    MaleReport: {
        screen: MaleReport,
        ...getNavigationConfig('Reporting')
    },
    Marijuana: {
        screen: Marijuana,
        ...getNavigationConfig('Marijuana')
    },
    MedConditions: {
        screen: MedConditions,
        ...getNavigationConfig('Med Conditions')
    },
    PregnantM: {
        screen: PregnantM,
        ...getNavigationConfig('Pregnant')
    },
    Sauna: {
        screen: Sauna,
        ...getNavigationConfig('Sauna')
    },
    Sleep: {
        screen: Sleep,
        ...getNavigationConfig('Sleep')
    },
    Soy: {
        screen: Soy,
        ...getNavigationConfig('Soy')
    },
    Stressed: {
        screen: Stressed,
        ...getNavigationConfig('Stressed')
    },
    SuperFoods: {
        screen: SuperFoods,
        ...getNavigationConfig('Super Foods')
    },
    SweetDrinks: {
        screen: SweetDrinks,
        ...getNavigationConfig('Sweet Drinks')
    },
    TV: {
        screen: TV,
        ...getNavigationConfig('TV')
    },
    Trying: {
        screen: Trying,
        ...getNavigationConfig('Trying')
    },
     Report: {
        screen: Report,
        ...getNavigationConfig('Reporting')
    },
    Vegetables: {
        screen: Vegetables,
        ...getNavigationConfig('Vegetables')
    },
    Weight: {
        screen: Weight,
        ...getNavigationConfig('Weight')
    },
    Login: {
        screen: Login,
    },
    Profile: {
        screen: Profile,
        ...getNavigationConfig('Profile')
    },
    SignOut: {
        screen: SignOut,
        ...getNavigationConfig('Sign Out')
    }
},
    getNavigationConfig()
);

const AuthDrawer = createDrawerNavigator(
    {
        Home: {
            screen: Home
        },
        Login: {
            screen: Login
        }
    },
    getNavigationConfig()
);

const AppDrawer = createDrawerNavigator(
    {
        QuerstionsNavigator: { screen: QuerstionsNavigator },
        Home: { screen: Home },
    },
    getNavigationConfig()
);



const mainTab = createSwitchNavigator(
    {
        AppDrawer: { screen: AppDrawer },
        AuthDrawer: { screen: AuthDrawer },
    },
    {
        initialRouteName: 'AuthDrawer',
    },
    getNavigationConfig()
);

export const AppNavigator = createDrawerNavigator(
    {
        mainTab: { screen: mainTab },
        Home: { screen: Home },
        Profile: { screen: Profile },
        SignOut: { screen: SignOut },

    },
    {
        headerMode: 'screen',
        contentComponent: props => <SideBar {...props} />,
        drawerWidth: 298
    }
);


export default AppNavigator;