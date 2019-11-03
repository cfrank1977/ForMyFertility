'use strict';
import { API, graphqlOperation } from 'aws-amplify';

module.exports = class FormData {
    constructor() {
        this.results = {};
    }

    async getFormData(username) {
        try {
          let query = `query scan {
            allFemalefertilityByUsername(username: "${username}"){
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
              }
            }`
          let results = await API.graphql(graphqlOperation(query));
          results = (results.data.allFemalefertilityByUsername.items[0]) ? results.data.allFemalefertilityByUsername.items[0] : {};
          return results;
        } catch (e) {
          alert(e.message); 
          return e.message;
        }
      }

    async updateFormData(fertilityQuestions) {
      try {
        let query = `
            mutation updateFemalefertility {
              updateFemalefertility(input:{
                  id: "${fertilityQuestions.id}",
                  username: "${fertilityQuestions.username}",
                  gender: "${fertilityQuestions.gender}",
                  age: ${fertilityQuestions.age},
                  yearChildlessSex: "${fertilityQuestions.yearChildlessSex}",
                  amountYearsChildlessSex: ${fertilityQuestions.amountYearsChildlessSex},
                  currentIVF: "${fertilityQuestions.currentIVF}",
	                hadPregnancy: "${fertilityQuestions.hadPregnancy}",
	                hadEctopicPregnancy: "${fertilityQuestions.hadEctopicPregnancy}",
	                liveBirth: "${fertilityQuestions.liveBirth}",
	                miscarriages: "${fertilityQuestions.miscarriages}",
	                partner: "${fertilityQuestions.partner}",
                  whichPartnerIssue: "${fertilityQuestions.whichPartnerIssue}"
                  amountChildren: ${fertilityQuestions.amountChildren},
    	            amountperfecthealth: ${fertilityQuestions.amountperfecthealth},
    	            donorsperm: "${fertilityQuestions.donorsperm}",
   		            donoreggs: "${fertilityQuestions.donoreggs}",
    	            donorembryos: "${fertilityQuestions.donorembryos}",
    	            eggs: ${fertilityQuestions.eggs},
    	            embryos: ${fertilityQuestions.embryos},
    	            embryostransfered: ${fertilityQuestions.embryostransfered},
    	            embryosfinalcycle: ${fertilityQuestions.embryosfinalcycle},
    	            frozenembryos: "${fertilityQuestions.frozenembryos}",
    	            gynecologicalCauses: "${fertilityQuestions.gynecologicalCauses}",
    	            gestationalcarrier: "${fertilityQuestions.gestationalcarrier}",
    	            hormone: "${fertilityQuestions.hormone}",
    	            icsi: "${fertilityQuestions.icsi}",
    	            ivfcycles: ${fertilityQuestions.ivfcycles},
    	            ivfconceived: "${fertilityQuestions.ivfconceived}",
    	            morethanoneivfconceived: "${fertilityQuestions.morethanoneivfconceived}",
    	            singletonmulitbirth: "${fertilityQuestions.singletonmulitbirth}",
    	            whichGynecologicalCauses: "${fertilityQuestions.whichGynecologicalCauses}"
                })
                 {
                  id
                  username
                  gender
                  age
                  yearChildlessSex
                  amountYearsChildlessSex
                  currentIVF
                  hadPregnancy
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
        `
        this.results = await API.graphql(graphqlOperation(query));
        return this.results.data.updateFemalefertility;
      } catch (e) {
        alert(e.message);
        return e.message;
      }
    }
    async addFormData(fertilityQuestions, username) {
      try {
        let query = `
            mutation add {
              createFemalefertility(input: {
                  username: "${username}",
                  gender: "${fertilityQuestions.gender}",
                  age: ${fertilityQuestions.age},
                  yearChildlessSex: "${fertilityQuestions.yearChildlessSex}",
                  amountYearsChildlessSex: ${fertilityQuestions.amountYearsChildlessSex},
                  currentIVF: "${fertilityQuestions.currentIVF}",
	                hadPregnancy: "${fertilityQuestions.hadPregnancy}",
	                hadEctopicPregnancy: "${fertilityQuestions.hadEctopicPregnancy}",
	                liveBirth: "${fertilityQuestions.liveBirth}",
	                miscarriages: "${fertilityQuestions.miscarriages}",
	                partner: "${fertilityQuestions.partner}",
                  whichPartnerIssue: "${fertilityQuestions.whichPartnerIssue}"
                  amountChildren: ${fertilityQuestions.amountChildren},
    	            amountperfecthealth: ${fertilityQuestions.amountperfecthealth},
    	            donorsperm: "${fertilityQuestions.donorsperm}",
   		            donoreggs: "${fertilityQuestions.donoreggs}",
    	            donorembryos: "${fertilityQuestions.donorembryos}",
    	            eggs: ${fertilityQuestions.eggs},
    	            embryos: ${fertilityQuestions.embryos},
    	            embryostransfered: ${fertilityQuestions.embryostransfered},
    	            embryosfinalcycle: ${fertilityQuestions.embryosfinalcycle},
    	            frozenembryos: "${fertilityQuestions.frozenembryos}",
    	            gynecologicalCauses: "${fertilityQuestions.gynecologicalCauses}",
    	            gestationalcarrier: "${fertilityQuestions.gestationalcarrier}",
    	            hormone: "${fertilityQuestions.hormone}",
    	            icsi: "${fertilityQuestions.icsi}",
    	            ivfcycles: ${fertilityQuestions.ivfcycles},
    	            ivfconceived: "${fertilityQuestions.ivfconceived}",
    	            morethanoneivfconceived: "${fertilityQuestions.morethanoneivfconceived}",
    	            singletonmulitbirth: "${fertilityQuestions.singletonmulitbirth}",
    	            whichGynecologicalCauses: "${fertilityQuestions.whichGynecologicalCauses}"
                }) { id }
            }
        `
        this.results = await API.graphql(graphqlOperation(query));
        return this.results.data.createFemalefertility;
      } catch (e) {
        alert(e.message);
        return e.message;
      }
    }
}



