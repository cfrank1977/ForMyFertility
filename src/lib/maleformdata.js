'use strict';
import { API, graphqlOperation } from 'aws-amplify';

module.exports = class MaleFormData {
  constructor() {
    this.results = {};
  }

  async getMaleFormData(username) {
    try {
      let query = `query scan {
              allMalefertilityByUsername(username: "${username}"){
                  items {
                    id
                    username
                    gender
                    age
                    height
                    weight
                    drinks
                    soy
                    veg
                    superfoods
                    alcohol
                    cigarettes
                    marijuana
                    jobactivity
                    jobexposure
                    stressed
                    sleep
                    tv
                    exercise
                    exercisetype
                    enhancers
                    sauna
                    pregnant
                    trying
                    frequency
                    lube
                    abnormalities
                    medconditions
                }
              }
            }`
      let results = await API.graphql(graphqlOperation(query));
      results = (results.data.allMalefertilityByUsername.items[0]) ? results.data.allMalefertilityByUsername.items[0] : {};
      return results;
    } catch (e) {
      alert(e.message);
      return e.message;
    }
  }

  async updateMaleFormData(maleQuestions) {
    try {
      let query = `
            mutation updateMalefertility {
              updateMalefertility(input:{
                  id: "${maleQuestions.id}",
                  username: "${maleQuestions.username}",
                  gender: "${maleQuestions.gender}",
                  age: ${maleQuestions.age},
                  height: "${maleQuestions.height}",
                  weight: ${maleQuestions.weight},
                  drinks: "${maleQuestions.drinks}",
                  soy: "${maleQuestions.soy}",
                  veg: "${maleQuestions.veg}",
                  superfoods: "${maleQuestions.superfoods}",
                  alcohol: "${maleQuestions.alcohol}",
                  cigarettes: "${maleQuestions.cigarettes}",
                  marijuana: "${maleQuestions.marijuana}",
                  jobactivity: "${maleQuestions.jobactivity}",
                  jobexposure: "${maleQuestions.jobexposure}",
                  stressed: "${maleQuestions.stressed}",
                  sleep: "${maleQuestions.sleep}",
                  tv: "${maleQuestions.tv}",
                  exercise: "${maleQuestions.exercise}",
                  exercisetype: "${maleQuestions.exercisetype}",
                  enhancers: "${maleQuestions.enhancers}",
                  sauna: "${maleQuestions.sauna}",
                  pregnant: "${maleQuestions.pregnant}",
                  trying: "${maleQuestions.trying}",
                  frequency: "${maleQuestions.frequency}",
                  lube: "${maleQuestions.lube}",
                  abnormalities: "${maleQuestions.abnormalities}",
                  medconditions: "${maleQuestions.medconditions}",
                })
                 {
                  id
                  username
                  gender
                  age
                  height
                  weight
                  drinks
                  soy
                  veg
                  superfoods
                  alcohol
                  cigarettes
                  marijuana
                  jobactivity
                  jobexposure
                  stressed
                  sleep
                  tv
                  exercise
                  exercisetype
                  enhancers
                  sauna
                  pregnant
                  trying
                  frequency
                  lube
                  abnormalities
                  medconditions
                }
              }
        `
      this.results = await API.graphql(graphqlOperation(query));
      return this.results.data.updateMalefertility;
    } catch (e) {
      alert(e.message);
      return e.message;
    }
  }
  async addMaleFormData(maleQuestions, username) {
    try {
      let query = `
            mutation add {
              createMalefertility(input: {
                  username: "${username}",
                  gender: "${maleQuestions.gender}",
                  age: ${maleQuestions.age},
                  height: "${maleQuestions.height}",
                  weight: ${maleQuestions.weight},
                  drinks: "${maleQuestions.drinks}",
                  soy: "${maleQuestions.soy}",
                  veg: "${maleQuestions.veg}",
                  superfoods: "${maleQuestions.superfoods}",
                  alcohol: "${maleQuestions.alcohol}",
                  cigarettes: "${maleQuestions.cigarettes}",
                  marijuana: "${maleQuestions.marijuana}",
                  jobactivity: "${maleQuestions.jobactivity}",
                  jobexposure: "${maleQuestions.jobexposure}",
                  stressed: "${maleQuestions.stressed}",
                  sleep: "${maleQuestions.sleep}",
                  tv: "${maleQuestions.tv}",
                  exercise: "${maleQuestions.exercise}",
                  exercisetype: "${maleQuestions.exercisetype}",
                  enhancers: "${maleQuestions.enhancers}",
                  sauna: "${maleQuestions.sauna}",
                  pregnant: "${maleQuestions.pregnant}",
                  trying: "${maleQuestions.trying}",
                  frequency: "${maleQuestions.frequency}",
                  lube: "${maleQuestions.lube}",
                  abnormalities: "${maleQuestions.abnormalities}",
                  medconditions: "${maleQuestions.medconditions}",
                }) { id }
            }
        `
      this.results = await API.graphql(graphqlOperation(query));
      return this.results.data.createMalefertility;
    } catch (e) {
      alert(e.message);
      return e.message;
    }
  }
}



