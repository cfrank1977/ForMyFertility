import React, { Component } from 'react';
import {
    Button,
    Picker,
    Slider,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Questions extends Component {
    state = {
        gender: false,
        age: 18,

    }
    onSubmit() {
        console.log('The submit button has been pressed!')
    }
    getSliderVal(val) {
        console.warn(val);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>What is your gender?</Text>
                    <Picker
                        selectedValue={this.state.gender}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>What is your age?</Text>
                    <Slider
                        style={{ width: 300 }}
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
                </View>
                <View>
                    <Button title='Submit' onPress={this.onSubmit.bind(this)} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#2196F3',
        margin: 10
    },
    content: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    }
});