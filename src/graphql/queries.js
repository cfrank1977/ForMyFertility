// eslint-disable
// this is an auto generated file. This will be overwritten

export const fetchQuestions = `query FetchQuestions($id: ID!) {
  fetchQuestions(id: $id) {
    id
    gender
    age
    yearChildlessSex
    yearsSubfertile
    currentIVF
    hadPregnancy
    hadEctopicPregnancy
    liveBirth
    miscarriages
    maleSubfertility
    maleSubfertilitCondition
  }
}
`;
export const getQuestions = `query GetQuestions($id: ID!) {
  getQuestions(id: $id) {
    id
    gender
    age
    yearChildlessSex
    yearsSubfertile
    currentIVF
    hadPregnancy
    hadEctopicPregnancy
    liveBirth
    miscarriages
    maleSubfertility
    maleSubfertilitCondition
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
      gender
      age
      yearChildlessSex
      yearsSubfertile
      currentIVF
      hadPregnancy
      hadEctopicPregnancy
      liveBirth
      miscarriages
      maleSubfertility
      maleSubfertilitCondition
    }
    nextToken
  }
}
`;
