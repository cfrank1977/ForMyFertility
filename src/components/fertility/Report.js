import React from 'react';
import {
    Content,
    Text,
    View
} from 'native-base';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form/native';

let Report = (props) => {
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

export default connect(({ fertilityQuestions }) => ({
    age: fertilityQuestions.age,
    yearChildlessSex: fertilityQuestions.yearChildlessSex,
    hadPregnancy: fertilityQuestions.hadPregnancy
}))(Report);