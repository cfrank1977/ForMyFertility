import React, { Component } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify'
import {
    Content,
    Button,
    List,
    ListItem,
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
            }).catch((error) => {
                console.log("No Authenticated User");
                console.log(error.message);
            });
    }

    getValues() {
        let items = [];
        let obj = this.state.fertilityResults;
        items = Object.keys(obj).map(function (key) {
            return [(key), obj[key]];
        });
        return items
    }

    render() {
        return (
            <Content >
                <View >
                    <Text>The Report: </Text>
                </View>
                {this.state.fertilityResults &&
                    <View>
                        <List dataArray={this.getValues()}
                            renderRow={(item) =>
                                <ListItem>
                                    <Text>{item[0]}:  {item[1]}</Text>
                                </ListItem>
                            }>
                        </List>
                    </View>}
                {!this.state.fertilityResults &&
                    <View>
                        <Button full rounded primary onPress={this.handleSubmit}>
                            <Text>Get Report!</Text>
                        </Button>
                    </View>}
            </Content>
        );
    }
}

export default connect(({ fertilityQuestions }) => ({ fertilityQuestions }))(Report);