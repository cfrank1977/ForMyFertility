/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    }
    nextToken
  }
}
`;
