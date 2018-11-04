import React, { Component } from 'react';
import {
    Content,
    Text,
    View
} from 'native-base';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form/native';
import { API, graphqlOperation } from 'aws-amplify'

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onSubmit() {
        let apiData = { age: this.state.age, yearChildlessSex: this.state.yearChildlessSex, hadPregnancy: the.state.hadPregnancy };
        let json = JSON.stringify(apiData);
        let query = `
            mutation add {
                createQuestions(input: {
                    age: ${apiData.age},
                    yearChildlessSex: "${apiData.yearChildlessSex}",
                    hadPregnancy: "${apiData.hadPregnancy}"
                }) { id }
            }
        `
        console.log(`Age within JSON = '${apiData.age}'`)
        API.graphql(graphqlOperation(query))
        console.log(`Submit button pressed! API JSON ${json}`)
    }
    render() {
        return (
            <Content >
                <View >
                    <Text>The Report</Text>
                </View>
                <Form model="fertilityQuestions">
                    <Text>You were born in.</Text>
                    <Control.TextInput
                        model=".age"
                    />
                    <Text>You've been trying for at least a year.</Text>
                    <Control.TextInput
                        model=".yearChildlessSex"
                    />
                    <Text>You've been pregnant before.</Text>
                    <Control.TextInput
                        model=".hadPregnancy"
                    />
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