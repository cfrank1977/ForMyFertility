import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Text, Body, Spinner } from "native-base";

export default class TrakSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <WebView
                source={{ uri: 'https://trakfertility.tools/api/embed/quiz/3' }}
                useWebKit={true}
                javaScriptEnabled={true}
                renderLoading={this._renderLoading}
                startInLoadingState={true}
            />
        );
    }
    
    _renderLoading = () => {
        return (
            <Body style={{ marginTop: 10 }}>
            <Spinner />
              <Text>
                Loading Trak Survey
            </Text>
            </Body>
        );
    }
}

