import React, { Component } from 'react';
import {
    Picker,
    SegmentedControlIOS,
    Slider,
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native';
import {
    Button,
    FormLabel,
    FormInput,
    FormValidationMessage
} from 'react-native-elements';
import { API, graphqlOperation } from 'aws-amplify';

export default class Questions extends Component {

    state = {
        gender: false,
        age: 18,
        yearChildlessSex: false,
        yearsSubfertile: 0,
        currentIVF: false,
        hadPregnancy: false,
        hadEctopicPregnancy: false,
        liveBirth: false,
        miscarriages: false,
        maleSubfertility: false,
        maleSubfertilitCondition: false
    }

    onSubmit() {
        let apiData = {
            gender: this.state.gender,
            age: this.state.age,
            yearChildlessSex: this.state.yearChildlessSex,
            yearsSubfertile: this.state.yearsSubfertile,
            currentIVF: this.state.currentIVF,
            hadPregnancy: this.state.hadPregnancy,
            hadEctopicPregnancy: this.state.hadEctopicPregnancy,
            liveBirth: this.state.liveBirth,
            miscarriages: this.state.miscarriages,
            maleSubfertility: this.state.maleSubfertility,
            maleSubfertilitCondition: this.state.maleSubfertilitCondition
        };
        let query = `
            mutation add {
                createQuestions(input: {
                    gender: "${apiData.gender}",
                    age: ${apiData.age},
                    yearChildlessSex: "${apiData.yearChildlessSex}",
                    yearsSubfertile: ${apiData.yearsSubfertile},
                    currentIVF: "${apiData.currentIVF}",
                    hadPregnancy: "${apiData.hadPregnancy}",
                    hadEctopicPregnancy: "${apiData.hadEctopicPregnancy}",
                    liveBirth: "${apiData.liveBirth}",
                    miscarriages: "${apiData.miscarriages}",
                    maleSubfertility: "${apiData.maleSubfertility}",
                    maleSubfertilitCondition: "${apiData.maleSubfertilitCondition}",
                }) { id }
            }
        `

        API.graphql(graphqlOperation(query))
        console.log(`Submit button pressed! API JSON ${JSON.stringify(apiData)}`)
    }


    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content} >
                    <FormLabel>What is your gender?</FormLabel>
                    <SegmentedControlIOS
                        values={['Male', 'Female']}
                        gender={this.state.selectedIndex}
                        onChange={(event) => {
                            if (event.nativeEvent.selectedSegmentIndex === 0) {
                                this.setState({ gender: 'male' });
                            } else {
                                this.setState({ gender: 'female' });
                            }

                        }}
                    />
                </View>
                <View style={styles.content} >
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                    <FormLabel>What is your age?</FormLabel>
                    <Slider
                        style={{ width: 300 }}
                        step={1}
                        minimumValue={18}
                        maximumValue={71}
                        value={this.state.age}
                        onValueChange={val => this.setState({ age: val })}
                    />
                    <Text style={styles.welcome}>
                        {this.state.age}
                    </Text>
                </View>
                <View style={styles.content} >
                    <FormLabel>Have you experienced at least 1 year of involuntary childlessness following unprotected and regular intercourse?</FormLabel>
                    <SegmentedControlIOS
                        values={['Yes', 'No']}
                        yearChildlessSex={this.state.selectedIndex}
                        onChange={(event) => {
                            if (event.nativeEvent.selectedSegmentIndex === 0) {
                                this.setState({ yearChildlessSex: 'yes' });
                            } else {
                                this.setState({ yearChildlessSex: 'no' });
                            }
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                </View>
                <View style={styles.content} >
                    <FormLabel>If yes, how many years have you or your partner been subfertile?</FormLabel>
                    <Slider
                        style={{ width: 300 }}
                        step={1}
                        minimumValue={1}
                        maximumValue={20}
                        value={this.state.yearsSubfertile}
                        onValueChange={val => this.setState({ yearsSubfertile: val })}

                    />
                    <Text style={styles.welcome}>
                        {this.state.yearsSubfertile}
                    </Text>
                </View>
                <View style={styles.content} >
                    <FormLabel>Have you and/or are you currently undergoing IVF?</FormLabel>
                    <SegmentedControlIOS
                        values={['Yes', 'No']}
                        currentIVF={this.state.selectedIndex}
                        onChange={(event) => {
                            if (event.nativeEvent.selectedSegmentIndex === 0) {
                                this.setState({ currentIVF: 'yes' });
                            } else {
                                this.setState({ currentIVF: 'no' });
                            }
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                </View>
                <View style={styles.content} >
                    <FormLabel>Have you ever had a pregnancy?</FormLabel>
                    <SegmentedControlIOS
                        values={['Yes', 'No']}
                        hadPregnancy={this.state.selectedIndex}
                        onChange={(event) => {
                            if (event.nativeEvent.selectedSegmentIndex === 0) {
                                this.setState({ hadPregnancy: 'yes' });
                            } else {
                                this.setState({ hadPregnancy: 'no' });
                            }
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                </View>
                <View style={styles.content} >
                    <FormLabel>Have you ever had an ectopic pregnancy?</FormLabel>
                    <SegmentedControlIOS
                        values={['Yes', 'No']}
                        hadEctopicPregnancy={this.state.selectedIndex}
                        onChange={(event) => {
                            if (event.nativeEvent.selectedSegmentIndex === 0) {
                                this.setState({ hadEctopicPregnancy: 'yes' });
                            } else {
                                this.setState({ hadEctopicPregnancy: 'no' });
                            }
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                </View>
                <View style={styles.content} >
                    <FormLabel>Have you had a previous live birth?</FormLabel>
                    <SegmentedControlIOS
                        values={['Yes', 'No']}
                        liveBirth={this.state.selectedIndex}
                        onChange={(event) => {
                            if (event.nativeEvent.selectedSegmentIndex === 0) {
                                this.setState({ liveBirth: 'yes' });
                            } else {
                                this.setState({ liveBirth: 'no' });
                            }
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                </View>
                <View style={styles.content} >
                    <FormLabel>Have you ever had a miscarriage?</FormLabel>
                    <SegmentedControlIOS
                        values={['Yes', 'No']}
                        miscarriages={this.state.selectedIndex}
                        onChange={(event) => {
                            if (event.nativeEvent.selectedSegmentIndex === 0) {
                                this.setState({ miscarriages: 'yes' });
                            } else {
                                this.setState({ miscarriages: 'no' });
                            }
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                </View>
                <View style={styles.content} >
                    <FormLabel>Is the husband/partner suffering from any male cause(s) of subfertility?</FormLabel>
                    <SegmentedControlIOS
                        values={['Yes', 'No']}
                        maleSubfertility={this.state.selectedIndex}
                        onChange={(event) => {
                            if (event.nativeEvent.selectedSegmentIndex === 0) {
                                this.setState({ maleSubfertility: 'yes' });
                            } else {
                                this.setState({ maleSubfertility: 'no' });
                            }
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                </View>
                <View style={styles.content} >
                    <FormLabel>Which of the following describes his condition most-appropriately? </FormLabel>
                    <Picker
                        selectedValue={this.state.maleSubfertilitCondition}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ maleSubfertilitCondition: itemValue })}>
                        <Picker.Item label="Azoospermia" value="azoospermia" />
                        <Picker.Item label="Tubal Factors" value="tubalFactors" />
                        <Picker.Item label="Idiopathy" value="idiopathy" />
                        <Picker.Item label="Low Sperm Count (oligospermia)" value="lowCount" />
                        <Picker.Item label="Poor Sperm Quality" value="poorQuality" />
                        <Picker.Item label="Poor Sperm Motility" value="poorMotility" />
                    </Picker>

                </View>
                <View style={styles.button}>
                    <Button raised icon={{ name: 'cached' }} title='Submit' onPress={this.onSubmit.bind(this)} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        flex: 1,
        width: 300,
        margin: 10,
    },
    welcome: {
        fontSize: 10,
        textAlign: 'left',
        margin: 5,
    },
    button: {
        bottom: 0,
        position: 'absolute',
    },
});