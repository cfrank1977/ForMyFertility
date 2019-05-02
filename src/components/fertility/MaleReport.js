import React, { Component } from 'react';
import { Auth } from 'aws-amplify'
import { Content, Spinner, Text, View } from 'native-base';
import * as Progress from 'react-native-progress';
import MaleFormData from '../../lib/maleformdata';
import Odds from '../../lib/odds';
import { connect } from 'react-redux';

export class MaleReport extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    async componentDidMount() {
        let user = await Auth.currentAuthenticatedUser();
        
        let maleformdata = new MaleFormData();
        if (this.props.maleQuestions.id) {
            maleformdata = await maleformdata.updateMaleFormData(this.props.maleQuestions);
            this.setState(maleformdata);
        } else {
            maleformdata = await maleformdata.addMaleFormData(this.props.maleQuestions, user.username);
            this.setState(maleformdata);
        }
        this.setState({ given_name: user.attributes.given_name })
        
        // let odds = new Odds();
        // odds = await odds.getOdds(this.state.id, this.props.maleQuestions.currentIVF)
        // this.setState(odds);
    }

    render() {
        return (
            <Content >
                {this.state.maleQuestions &&
                    <View>
                        <Text>{this.state.given_name || ''} your probability of getting a woman pregnant is: </Text>
                        <Progress.Circle
                            progress={0.11}
                            size={300}
                            showsText={true}
                            thickness={10}
                            borderWidth={5}
                            color={'rgb(69, 204, 177)'}
                            filledColor={'rgb(69, 204, 177)'}
                        />
                    </View>}
                
                {!this.state.maleQuestions &&
                    <View>
                        <Spinner />
                        <Text>Getting Report!</Text>

                    </View>}
            </Content>
        );
    }
}

export default connect(({ maleQuestions }) => ({ maleQuestions }))(MaleReport);
