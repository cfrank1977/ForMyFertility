// eslint-disable
// this is an auto generated file. This will be overwritten

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
    }
    nextToken
  }
}
`;
