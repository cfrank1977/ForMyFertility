'use strict';
import { API } from 'aws-amplify'

module.exports = class Odds  {
    constructor() {
        this.Odds = {};
    }

    async getOdds(formID, currentIVF) {
        console.log(`formID is: ${formID} and currentIVF ${currentIVF}`)
        try {
            let fertilityResults = await API.get('oddsapi', `/odds/${formID}`);
                if (currentIVF === "no") {
                    this.Odds = ({ fertilityResults: {
                        propLiveBirth:  fertilityResults.propLiveBirth / 100 
                    }
                })    
                } else {
                    this.Odds = ({ fertilityResults: fertilityResults });
                }
                console.log(`Odds are:  ${this.Odds}`)
                return this.Odds;
            } catch (e) {
                alert(e.message);
                return e.message;
              }
    }
}

