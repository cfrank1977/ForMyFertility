import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
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
    }
    handleSubmit() {
        console.log(`Age within JSON = '${this.props.age}'`)
        let query = `
            mutation add {
                createQuestions(input: {
                    age: ${this.props.age},
                    yearChildlessSex: "${this.props.yearChildlessSex}"
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
                            <Text> Get Report , {this.props.age} {this.props.yearChildlessSex}!</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        );
    }
}

export default connect(({ fertilityQuestions }) => ({
    age: fertilityQuestions.age,
    yearChildlessSex: fertilityQuestions.yearChildlessSex,
    hadPregnancy: fertilityQuestions.hadPregnancy
}))(Report);