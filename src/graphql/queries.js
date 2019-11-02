// eslint-disable
// this is an auto generated file. This will be overwritten

<<<<<<< HEAD
export const allFemalefertilityByUsername = `query AllFemalefertilityByUsername(
  $count: Int
  $nextToken: String
  $username: String!
) {
  allFemalefertilityByUsername(
    count: $count
    nextToken: $nextToken
    username: $username
  ) {
    items {
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
    nextToken
  }
}
`;
export const allMalefertilityByUsername = `query AllMalefertilityByUsername(
  $count: Int
  $nextToken: String
  $username: String!
) {
  allMalefertilityByUsername(
    count: $count
    nextToken: $nextToken
    username: $username
  ) {
    items {
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
    nextToken
  }
}
`;
export const getFemalefertility = `query GetFemalefertility($id: String!) {
  getFemalefertility(id: $id) {
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
export const getMalefertility = `query GetMalefertility($id: String!) {
  getMalefertility(id: $id) {
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
export const listFemalefertilities = `query ListFemalefertilities(
  $filter: TableFemalefertilityFilterInput
  $limit: Int
  $nextToken: String
) {
  listFemalefertilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const listMalefertilities = `query ListMalefertilities(
  $filter: TableMalefertilityFilterInput
  $limit: Int
  $nextToken: String
) {
  listMalefertilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
export const fetchQuestions = `query FetchQuestions($id: ID!) {
  fetchQuestions(id: $id) {
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
export const getQuestions = `query GetQuestions($id: ID!) {
  getQuestions(id: $id) {
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
export const listQuestions = `query ListQuestions(
  $filter: TableQuestionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
