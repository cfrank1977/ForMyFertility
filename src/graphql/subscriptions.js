// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateQuestions = `subscription OnCreateQuestions(
  $id: ID
  $gender: String
  $age: Int
  $yearChildlessSex: String
  $yearsSubfertile: Int
) {
  onCreateQuestions(
    id: $id
    gender: $gender
    age: $age
    yearChildlessSex: $yearChildlessSex
    yearsSubfertile: $yearsSubfertile
  ) {
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
export const onUpdateQuestions = `subscription OnUpdateQuestions(
  $id: ID
  $gender: String
  $age: Int
  $yearChildlessSex: String
  $yearsSubfertile: Int
) {
  onUpdateQuestions(
    id: $id
    gender: $gender
    age: $age
    yearChildlessSex: $yearChildlessSex
    yearsSubfertile: $yearsSubfertile
  ) {
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
export const onDeleteQuestions = `subscription OnDeleteQuestions(
  $id: ID
  $gender: String
  $age: Int
  $yearChildlessSex: String
  $yearsSubfertile: Int
) {
  onDeleteQuestions(
    id: $id
    gender: $gender
    age: $age
    yearChildlessSex: $yearChildlessSex
    yearsSubfertile: $yearsSubfertile
  ) {
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
