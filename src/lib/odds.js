'use strict';
import { API } from 'aws-amplify'

module.exports = class Odds  {
    constructor() {
        this.Odds = {};
    }

    async getOdds(formID, currentIVF) {
        try {
            let fertilityResults = await API.get('odds', `/odds/${formID}`);
                if (currentIVF === "no") {
                    this.Odds = ({ fertilityResults: {
                        propLiveBirth:  fertilityResults.propLiveBirth / 100 
                    }
                })    
                } else {
                    this.Odds = ({ fertilityResults: fertilityResults });
                }
                return this.Odds;
            } catch (e) {
                alert(e.message);
                return e.message;
              }
    }
}

