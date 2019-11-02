// eslint-disable
// this is an auto generated file. This will be overwritten

<<<<<<< HEAD
export const onCreateFemalefertility = `subscription OnCreateFemalefertility($id: ID) {
  onCreateFemalefertility(id: $id) {
    age
    amountChildren
    amountYearsChildlessSex
    amountperfecthealth
    currentIVF
    donoreggs
    donorembryos
    donorsperm
    eggs
    embryos
    embryosfinalcycle
    embryostransfered
    frozenembryos
    gender
    gestationalcarrier
    gynecologicalCauses
    hadEctopicPregnancy
    hadPregnancy
    hormone
    icsi
    id
    ivfconceived
    ivfcycles
    liveBirth
    miscarriages
    morethanoneivfconceived
    partner
    singletonmulitbirth
    username
    whichGynecologicalCauses
    whichPartnerIssue
    yearChildlessSex
  }
}
`;
export const onCreateMalefertility = `subscription OnCreateMalefertility($id: ID) {
  onCreateMalefertility(id: $id) {
    abnormalities
    age
    alcohol
    cigarettes
    drinks
    enhancers
    exercise
    exercisetype
    frequency
    gender
    height
    id
    jobactivity
    jobexposure
    lube
    marijuana
    medconditions
    pregnant
    sauna
    sleep
    soy
    stressed
    superfoods
    trying
    tv
    username
    veg
    weight
  }
}
`;
export const onDeleteFemalefertility = `subscription OnDeleteFemalefertility($id: ID) {
  onDeleteFemalefertility(id: $id) {
    age
    amountChildren
    amountYearsChildlessSex
    amountperfecthealth
    currentIVF
    donoreggs
    donorembryos
    donorsperm
    eggs
    embryos
    embryosfinalcycle
    embryostransfered
    frozenembryos
    gender
    gestationalcarrier
    gynecologicalCauses
    hadEctopicPregnancy
    hadPregnancy
    hormone
    icsi
    id
    ivfconceived
    ivfcycles
    liveBirth
    miscarriages
    morethanoneivfconceived
    partner
    singletonmulitbirth
    username
    whichGynecologicalCauses
    whichPartnerIssue
    yearChildlessSex
  }
}
`;
export const onDeleteMalefertility = `subscription OnDeleteMalefertility($id: ID) {
  onDeleteMalefertility(id: $id) {
    abnormalities
    age
    alcohol
    cigarettes
    drinks
    enhancers
    exercise
    exercisetype
    frequency
    gender
    height
    id
    jobactivity
    jobexposure
    lube
    marijuana
    medconditions
    pregnant
    sauna
    sleep
    soy
    stressed
    superfoods
    trying
    tv
    username
    veg
    weight
  }
}
`;
export const onUpdateFemalefertility = `subscription OnUpdateFemalefertility($id: ID) {
  onUpdateFemalefertility(id: $id) {
    age
    amountChildren
    amountYearsChildlessSex
    amountperfecthealth
    currentIVF
    donoreggs
    donorembryos
    donorsperm
    eggs
    embryos
    embryosfinalcycle
    embryostransfered
    frozenembryos
    gender
    gestationalcarrier
    gynecologicalCauses
    hadEctopicPregnancy
    hadPregnancy
    hormone
    icsi
    id
    ivfconceived
    ivfcycles
    liveBirth
    miscarriages
    morethanoneivfconceived
    partner
    singletonmulitbirth
    username
    whichGynecologicalCauses
    whichPartnerIssue
    yearChildlessSex
  }
}
`;
export const onUpdateMalefertility = `subscription OnUpdateMalefertility($id: ID) {
  onUpdateMalefertility(id: $id) {
    abnormalities
    age
    alcohol
    cigarettes
    drinks
    enhancers
    exercise
    exercisetype
    frequency
    gender
    height
    id
    jobactivity
    jobexposure
    lube
    marijuana
    medconditions
    pregnant
    sauna
    sleep
    soy
    stressed
    superfoods
    trying
    tv
    username
    veg
    weight
=======
export const onCreateQuestions = `subscription OnCreateQuestions(
  $id: ID
  $username: String
  $gender: String
  $age: Int
) {
  onCreateQuestions(id: $id, username: $username, gender: $gender, age: $age) {
    id
    username
    gender
    age
    yearChildlessSex
    amountYearsChildlessSex
    currentIVF
    hadPregnancy
    hadEctopicPregnancy
    liveBirth
    miscarriages
    partner
    whichPartnerIssue
    amountChildren
    amountperfecthealth
    donorsperm
    donoreggs
    donorembryos
    eggs
    embryos
    embryostransfered
    embryosfinalcycle
    frozenembryos
    gynecologicalCauses
    gestationalcarrier
    hormone
    icsi
    ivfcycles
    ivfconceived
    morethanoneivfconceived
    singletonmulitbirth
    whichGynecologicalCauses
  }
}
`;
export const onUpdateQuestions = `subscription OnUpdateQuestions(
  $id: ID
  $username: String
  $gender: String
  $age: Int
) {
  onUpdateQuestions(id: $id, username: $username, gender: $gender, age: $age) {
    id
    username
    gender
    age
    yearChildlessSex
    amountYearsChildlessSex
    currentIVF
    hadPregnancy
    hadEctopicPregnancy
    liveBirth
    miscarriages
    partner
    whichPartnerIssue
    amountChildren
    amountperfecthealth
    donorsperm
    donoreggs
    donorembryos
    eggs
    embryos
    embryostransfered
    embryosfinalcycle
    frozenembryos
    gynecologicalCauses
    gestationalcarrier
    hormone
    icsi
    ivfcycles
    ivfconceived
    morethanoneivfconceived
    singletonmulitbirth
    whichGynecologicalCauses
  }
}
`;
export const onDeleteQuestions = `subscription OnDeleteQuestions(
  $id: ID
  $username: String
  $gender: String
  $age: Int
) {
  onDeleteQuestions(id: $id, username: $username, gender: $gender, age: $age) {
    id
    username
    gender
    age
    yearChildlessSex
    amountYearsChildlessSex
    currentIVF
    hadPregnancy
    hadEctopicPregnancy
    liveBirth
    miscarriages
    partner
    whichPartnerIssue
    amountChildren
    amountperfecthealth
    donorsperm
    donoreggs
    donorembryos
    eggs
    embryos
    embryostransfered
    embryosfinalcycle
    frozenembryos
    gynecologicalCauses
    gestationalcarrier
    hormone
    icsi
    ivfcycles
    ivfconceived
    morethanoneivfconceived
    singletonmulitbirth
    whichGynecologicalCauses
>>>>>>> 45b5b9051805682dbd22fed3446ecb528421660d
  }
}
`;
