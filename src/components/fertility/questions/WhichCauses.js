import React, { Component } from 'react';
import { ProgressViewIOS, Picker } from 'react-native';

import {
    Control,
    Form,
    actions,
} from 'react-redux-form/native';
import {
    Button, 
    Content,
    Text,
    View
} from 'native-base';


export default class WhichGynecologicalCauses extends Component {
    handleSubmit(values) {
        this.props.dispatch(actions.submit('fertilityQuestions', values));
    }
    render() {
        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 5 of 7</Text>
                    <ProgressViewIOS progress={0.625} progressTintColor={'#86B2CA'} />
                </View>

                <Form model="fertilityQuestions" onSubmit={values => this.handleSubmit(values)}>
                    <Text>A.	Which of the following describe your condition or diagnosis most appropriately? </Text>
                    <Control.Picker model=".whichGynecologicalCauses">
                        <Picker.Item label='Endometriosis' value='endometriosis' />
                        <Picker.Item label='Tubal Factor' value='tubalfactor' />
                        <Picker.Item label='Ovarian Dysfunction' value='ovariandysfunction' />
                        <Picker.Item label='Polycystic Ovarian Syndrome' value='pcos' />
                        <Picker.Item label='Diminished Ovarian Reserve' value='diminishedovarianreserve' />
                        <Picker.Item label='Uterine Factor' value='uterinefactor' />
                        <Picker.Item label='Cancer Chemotherapy' value='cancerchemotherapy' />
                        <Picker.Item label='Myomas' value='myomas' />
                        <Picker.Item label='Immunological Problems' value='immunological' />
                        <Picker.Item label='Chromosomal Abnormalities' value='chromosomalabnormalities' />
                        <Picker.Item label='Infection of the Tubes' value='tubesinfection' />
                        <Picker.Item label='Infection of the Uterus' value='uterusinfection' />
                    </Control.Picker>
                    <View>
                        <Button full rounded primary onPress={() => this.props.navigation.navigate("CurrentIVF")}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Form >
            </Content>
        );
    }
}