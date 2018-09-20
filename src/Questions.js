import React, { Component } from 'react';
import {
    SegmentedControlIOS,
    Slider,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Button,
    FormLabel,
    FormInput,
    FormValidationMessage
} from 'react-native-elements';

export default class Questions extends Component {
    state = {
        gender: false,
        age: 18,
        yearChildlessSex: false,
        yearsSubfertile: 0,
        currentIVF: false,
    }
    onSubmit() {
        console.log('The submit button has been pressed!')
    }
    getSliderVal(val) {
        console.log(val);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content} >
                    <FormLabel>What is your gender?</FormLabel>
                    <SegmentedControlIOS
                        values={['Male', 'Female']}
                        gender={this.state.gender}
                        onChange={(event) => {
                            this.setState({ gender: event.nativeEvent.gender });
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                    <FormLabel>What is your age?</FormLabel>
                    <Slider
                        style={{ width: 200 }}
                        step={1}
                        minimumValue={18}
                        maximumValue={71}
                        value={this.state.age}
                        onValueChange={val => this.setState({ age: val })}
                        onSlidingComplete={val => this.getSliderVal(val)}
                    />
                    <Text style={styles.welcome}>
                        {this.state.age}
                    </Text>
                    <FormLabel>Have you experienced at least 1 year of involuntary childlessness following unprotected and regular intercourse?</FormLabel>
                    <SegmentedControlIOS
                        values={['Yes', 'No']}
                        yearChildlessSex={this.state.yearChildlessSex}
                        onChange={(event) => {
                            this.setState({ yearChildlessSex: event.nativeEvent.yearChildlessSex });
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                    <FormLabel>If yes, how many years have you or your partner been subfertile?</FormLabel>
                    <Slider
                        style={{ width: 200 }}
                        step={1}
                        minimumValue={1}
                        maximumValue={20}
                        value={this.state.yearsSubfertile}
                        onValueChange={val => this.setState({ yearsSubfertile: val })}
                        onSlidingComplete={val => this.getSliderVal(val)}
                    />
                    <Text style={styles.welcome}>
                        {this.state.yearsSubfertile}
                    </Text>
                    <FormLabel>Have you and/or are you currently undergoing IVF?</FormLabel>
                    <SegmentedControlIOS
                        values={['Yes', 'No']}
                        currentIVF={this.state.currentIVF}
                        onChange={(event) => {
                            this.setState({ currentIVF: event.nativeEvent.currentIVF });
                        }}
                    />
                    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
                </View>
                <View style={styles.button}>
                    <Button raised icon={{name: 'cached'}} title='Submit' onPress={this.onSubmit.bind(this)} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 500,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        flex: 1,
        marginTop: 50,
        margin: 10,
        width: 250,
        height: 100,

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