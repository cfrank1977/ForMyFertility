import React, { Component } from 'react';
import { Auth } from 'aws-amplify'
import { Content, Spinner, Text, View } from 'native-base';
import * as Progress from 'react-native-progress';
import FormData from '../../lib/formdata';
import Odds from '../../lib/odds';
import { connect } from 'react-redux';

export class Report extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    async componentDidMount() {
        let user = await Auth.currentAuthenticatedUser();
        let formdata = new FormData();
        let odds = new Odds();
        if (this.props.fertilityQuestions.id) {
            formdata = await formdata.updateFormData(this.props.fertilityQuestions);
            this.setState(formdata);
        } else {
            formdata = await formdata.addFormData(this.props.fertilityQuestions, user.username);
            this.setState(formdata);
        }
        
        this.setState({ given_name: user.attributes.given_name })
        odds = await odds.getOdds(formdata.id, this.props.fertilityQuestions.currentIVF)
        this.setState(odds);
    }

    render() {
        return (
            <Content >
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

                    </View>}
            </Content>
        );
    }
}

export default connect(({ fertilityQuestions }) => ({ fertilityQuestions }))(Report);
