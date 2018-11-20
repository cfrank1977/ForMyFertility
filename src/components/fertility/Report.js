import React, { Component } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import {
    Content,
    Button,
    Text,
    View
} from 'native-base';
import { connect } from 'react-redux';

class Report extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
        };
    }

    async componentDidMount() {
        const username = await Auth.currentAuthenticatedUser();
        this.setState(username);
        console.log(`chris the username is: ${JSON.stringify(this.state.username)}`)
        console.log(`chris the form data is: ${JSON.stringify(this.props.fertilityQuestions)}`)
        let query = `
            mutation add {
                createQuestions(input: {
                    username: "${this.state.username}",
                    gender: "female",
                    age: ${this.props.fertilityQuestions.age},
                    yearChildlessSex: "${this.props.fertilityQuestions.yearChildlessSex}",
                    amountYearsChildlessSex: ${this.props.fertilityQuestions.amountYearsChildlessSex},
                    currentIVF: "${this.props.fertilityQuestions.currentIVF}",
	                hadPregnancy: "${this.props.fertilityQuestions.hadPregnancy}",
	                hadEctopicPregnancy: "${this.props.fertilityQuestions.hadEctopicPregnancy}",
	                liveBirth: "${this.props.fertilityQuestions.liveBirth}",
	                miscarriages: "${this.props.fertilityQuestions.miscarriages}",
	                partner: "${this.props.fertilityQuestions.partner}",
                    whichPartnerIssue: "${this.props.fertilityQuestions.whichPartnerIssue}"
                    amountChildren: ${this.props.fertilityQuestions.amountChildren},
    	            amountperfecthealth: ${this.props.fertilityQuestions.amountperfecthealth},
    	            donorsperm: "${this.props.fertilityQuestions.donorsperm}",
   		            donoreggs: "${this.props.fertilityQuestions.donoreggs}",
    	            donorembryos: "${this.props.fertilityQuestions.donorembryos}",
    	            eggs: ${this.props.fertilityQuestions.eggs},
    	            embryos: ${this.props.fertilityQuestions.embryos},
    	            embryostransfered: ${this.props.fertilityQuestions.embryostransfered},
    	            embryosfinalcycle: ${this.props.fertilityQuestions.embryosfinalcycle},
    	            frozenembryos: "${this.props.fertilityQuestions.frozenembryos}",
    	            gynecologicalCauses: "${this.props.fertilityQuestions.gynecologicalCauses}",
    	            gestationalcarrier: "${this.props.fertilityQuestions.gestationalcarrier}",
    	            hormone: "${this.props.fertilityQuestions.hormone}",
    	            icsi: "${this.props.fertilityQuestions.icsi}",
    	            ivfcycles: ${this.props.fertilityQuestions.ivfcycles},
    	            ivfconceived: "${this.props.fertilityQuestions.ivfconceived}",
    	            morethanoneivfconceived: "${this.props.fertilityQuestions.morethanoneivfconceived}",
    	            singletonmulitbirth: "${this.props.fertilityQuestions.singletonmulitbirth}",
    	            whichGynecologicalCauses: "${this.props.fertilityQuestions.whichGynecologicalCauses}"
                }) { id }
            }
        `
        const results = await API.graphql(graphqlOperation(query));
        this.setState(results.data);
        console.log(`chris the DynamoDB id is: ${JSON.stringify(this.state.createQuestions.id)}`)
    }

    handleSubmit() {

        API.get('dev-formyfertilityapi', `/formyfertility/${this.state.createQuestions.id}`)
            .then((fertilityResults) => {
                this.setState({ fertilityResults: fertilityResults });
                console.log(this.state);
            }).catch((error) => {
                console.log("No Authenticated User");
                console.log(error.message);
            });
    }

    render() {
        return (
            <Content >
                <View >
                    <Text>The Report: </Text>
                </View>
                {this.state.fertilityResults && 
                <View>
                    <Text>Your Results: </Text>
                    <Text>Age: {this.state.fertilityResults.age}</Text>
                    <Text>age2: {this.state.fertilityResults.age2}</Text>
                    <Text>age3: {this.state.fertilityResults.age3}</Text>
                    <Text>agespl3: {this.state.fertilityResults.agespl3}</Text>
                    <Text>yrsinfer: {this.state.fertilityResults.yrsinfer}</Text>
                    <Text>prevcycles: {this.state.fertilityResults.prevcycles}</Text>
                    <Text>prevspl: {this.state.fertilityResults.prevspl}</Text>
                    <Text>prevlvbr: {this.state.fertilityResults.prevlvbr}</Text>
                    <Text>endomet: {this.state.fertilityResults.endomet}</Text>
                    <Text>mis: {this.state.fertilityResults.mis}</Text>
                    <Text>ect: {this.state.fertilityResults.ect}</Text>
                    <Text>logOddsLiveBirth1Emb: {this.state.fertilityResults.logOddsLiveBirth1Emb}</Text>
                    <Text>propLiveBirth1Emb: {this.state.fertilityResults.propLiveBirth1Emb}</Text>
                    <Text>logOddsLiveBirth2Emb: {this.state.fertilityResults.logOddsLiveBirth2Emb}</Text>
                    <Text>propLiveBirth2Emb: {this.state.fertilityResults.propLiveBirth2Emb}</Text>
                    <Text>logOddsLiveBirth3Emb: {this.state.fertilityResults.logOddsLiveBirth3Emb}</Text>
                    <Text>logOddsMultiBirth1Emb: {this.state.fertilityResults.logOddsMultiBirth1Emb}</Text>
                    <Text>propMultiBirth1Emb: {this.state.fertilityResults.propMultiBirth1Emb}</Text>
                    <Text>logOddsMultiBirth2Emb: {this.state.fertilityResults.logOddsMultiBirth2Emb}</Text>
                    <Text>propMultiBirth2Emb: {this.state.fertilityResults.propMultiBirth2Emb}</Text>
                    <Text>logOddsMultiBirth3Emb: {this.state.fertilityResults.logOddsMultiBirth3Emb}</Text>
                    <Text>propMultiBirth3Emb: {this.state.fertilityResults.propMultiBirth3Emb}</Text>
                </View>}
                <View>
                    <Button full rounded primary onPress={this.handleSubmit}>
                        <Text>Get Report!</Text>
                    </Button>
                </View>
            </Content>
        );
    }
}

export default connect(({ fertilityQuestions }) => ({ fertilityQuestions }))(Report);