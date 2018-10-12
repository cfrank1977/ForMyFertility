import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

import {
    ProgressViewIOS,
    Picker,
} from 'react-native'
import {
    Content,
    Text,
    View
} from 'native-base';

const Age = (props) => {

    let ages = [];
    for (let i = 2005; i >= 1955; i--) {
        ages.push(<Picker.Item key={i} label={`${i}`} value={i} />)
    }
    this.setState({
        ages: ages
    });



        return (
            <form onSubmit={handleSubmit}>
                <Content >
                    <View style={{ alignSelf: "center", margin: 10 }}>
                        <Text>Question 1 of 7</Text>
                        <ProgressViewIOS progress={0.125} progressTintColor={'#86B2CA'} />
                    </View>
                    <Text>What year were you born?</Text>
                    <Field>
                        <Picker
                            selectedValue={this.props.props.age}

                            onValueChange={(age) => { this.setState({ age }); }}
                        >
                            {this.props.props.ages}
                        </Picker>
                    </Field>

                </Content>
                <div>
                    <button type="submit" className="next">Next</button>
                </div>
            </form >

        );
    
}

export default reduxForm({
    form: 'fertility', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(Age);