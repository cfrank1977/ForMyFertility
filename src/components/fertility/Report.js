import React, { Component } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import {
    Content,
    Button,
    Text,
    View
} from 'native-base';
import { connect } from 'react-redux';
import { Form, Control, actions } from 'react-redux-form/native';


class Report extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          };
    }

    async componentDidMount() {
        
        Auth.currentAuthenticatedUser()
        .then((user) => {
            this.setState(user);
            console.log(this.state.username);
          }).catch((error)=>{
             console.log("No Authenticated User");
             console.log(error.message);
          });
    }

    handleSubmit() {
        
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
        console.log(query)
        API.graphql(graphqlOperation(query))

    }

    render() {
        return (
            <Content >
                <View >
                    <Text>The Report</Text>
                </View>
                <Form model="fertilityQuestions">
                    <Control.TextInput model=".age" />
                    <Control.TextInput model=".yearChildlessSex" />

                    <View>
                        <Button type="submit" onPress={this.handleSubmit}>
                            <Text> Get Report , {this.props.fertilityQuestions.age} {this.props.fertilityQuestions.yearChildlessSex}!</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}

export default connect(({ fertilityQuestions }) => ({ fertilityQuestions }))(Report);