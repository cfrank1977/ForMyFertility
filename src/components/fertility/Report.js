import React, { Component } from 'react';
<<<<<<< HEAD
import { Auth } from 'aws-amplify'
import { Content, Spinner, Text, View } from 'native-base';
import * as Progress from 'react-native-progress';
import FormData from '../../lib/formdata';
import Odds from '../../lib/odds';
import { connect } from 'react-redux';

export class Report extends Component {
    constructor(props, context) {
        super(props, context);
=======
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
>>>>>>> 45b5b9051805682dbd22fed3446ecb528421660d
        this.state = {
        };
    }

    async componentDidMount() {
<<<<<<< HEAD
        let user = await Auth.currentAuthenticatedUser();
        let formdata = new FormData();
        let odds = new Odds();
        if (this.props.fertilityQuestions.id) {
            formdata = await formdata.updateFormData(this.props.fertilityQuestions);
            this.setState(formdata);
        } else {
            formdata = await formdata.addFormData(this.props.fertilityQuestions, user.username);
            console.log(`user: ${JSON.stringify(formdata)}`)
            this.setState(formdata);
        }
        
        this.setState({ given_name: user.attributes.given_name })
        odds = await odds.getOdds(formdata.id, this.props.fertilityQuestions.currentIVF)
        this.setState(odds);
=======
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
>>>>>>> 45b5b9051805682dbd22fed3446ecb528421660d
    }

    render() {
        return (
            <Content >
<<<<<<< HEAD
                {this.state.fertilityResults && this.props.fertilityQuestions.currentIVF === "no" &&
                    <View>
                        <Text>{this.state.given_name || ''} your probability of a live birth is: </Text>
                        <Progress.Circle
                            progress={this.state.fertilityResults.propLiveBirth}
                            size={300}
                            animated={false}
                            showsText={true}
                            thickness={10}
                            borderWidth={5}
                            color={'rgb(69, 204, 177)'}
                            filledColor={'rgb(69, 204, 177)'}
                        />
                    </View>}
                {this.state.fertilityResults && this.props.fertilityQuestions.currentIVF === "yes" &&
                    <View>
                        <Text>Your Probability of a Live Birth with One Embryo: </Text>
                        <Progress.Circle
                            showsText={true}
                            size={300}
                            animated={false}
                            thickness={10}
                            progress={this.state.fertilityResults.propLiveBirth1Emb}
                            borderWidth={5}
                            color={'rgb(69, 204, 177)'}
                            filledColor={'rgb(69, 204, 177)'}
                        />
                        <Text>Your Probability of a Live Birth with Two Embryos: </Text>
                        <Progress.Circle
                            showsText={true}
                            size={300}
                            animated={false}
                            thickness={10}
                            progress={this.state.fertilityResults.propLiveBirth2Emb}
                            borderWidth={5}
                            color={'rgb(69, 204, 177)'}
                            filledColor={'rgb(69, 204, 177)'}
                        />
                        <Text>Your Probability of a Live Birth with Three Embryos: </Text>
                        <Progress.Circle
                            showsText={true}
                            size={300}
                            animated={false}
                            thickness={10}
                            progress={this.state.fertilityResults.propLiveBirth3Emb}
                            borderWidth={5}
                            color={'rgb(69, 204, 177)'}
                            filledColor={'rgb(69, 204, 177)'}
                        />
                        <Text>Your Probability of a Multi Birth with One Embryo: </Text>
                        <Progress.Circle
                            showsText={true}
                            size={300}
                            animated={false}
                            thickness={10}
                            progress={this.state.fertilityResults.propMultiBirth1Emb}
                            borderWidth={5}
                            color={'rgb(69, 204, 177)'}
                            filledColor={'rgb(69, 204, 177)'}
                        />
                        <Text>Your Probability of a Multi Birth with Two Embryos: </Text>
                        <Progress.Circle
                            showsText={true}
                            size={300}
                            animated={false}
                            thickness={10}
                            progress={this.state.fertilityResults.propMultiBirth2Emb}
                            borderWidth={5}
                            color={'rgb(69, 204, 177)'}
                            filledColor={'rgb(69, 204, 177)'}
                        />
                        <Text>Your Probability of a Multi Birth with Three Embryos: </Text>
                        <Progress.Circle
                            showsText={true}
                            size={300}
                            animated={false}
                            thickness={10}
                            progress={this.state.fertilityResults.propMultiBirth3Emb}
                            borderWidth={5}
                            color={'rgb(69, 204, 177)'}
                            filledColor={'rgb(69, 204, 177)'}
                        />
                    </View>
                }
                {!this.state.fertilityResults &&
                    <View>
                        <Spinner />
                        <Text>Getting Report!</Text>

=======
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
>>>>>>> 45b5b9051805682dbd22fed3446ecb528421660d
                    </View>}
            </Content>
        );
    }
}

<<<<<<< HEAD
export default connect(({ fertilityQuestions }) => ({ fertilityQuestions }))(Report);
=======
export default connect(({ fertilityQuestions }) => ({ fertilityQuestions }))(Report);
>>>>>>> 45b5b9051805682dbd22fed3446ecb528421660d
