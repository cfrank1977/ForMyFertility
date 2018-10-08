import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
    ProgressViewIOS,
    Picker,
} from 'react-native'
import {
    Content,
    Text,
    View
} from 'native-base';


export default class Age extends Component {

    componentDidMount() {
        let ages = [];
        for (let i = 2005; i >= 1955; i--) {
            ages.push(<Picker.Item key={i} label={`${i}`} value={i} />)
        }
        this.setState({
            ages: ages
        });
    }

    render() {

        return (
            <Content >
                <View style={{ alignSelf: "center", margin: 10 }}>
                    <Text>Question 1 of 7</Text>
                    <ProgressViewIOS progress={0.125} progressTintColor={'#86B2CA'} />
                </View>
                <Text>What year were you born?</Text>
                <Picker
                    selectedValue={this.props.props.age}

                    onValueChange={(age) => { this.setState({ age }); }}
                >
                    {this.props.props.ages}
                </Picker>
            </Content>
            
        );
    }
}