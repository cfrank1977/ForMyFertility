import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Content,
} from 'native-base';
import { API, graphqlOperation } from 'aws-amplify';
import Age from './Questions/Age'
import YearTrying from './Questions/YearTrying'
import Pregnant from './Questions/Pregnant'

class QuestionsForm extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            gender: 'female',
            age: 1996,
            yearChildlessSex: 'no',
            yearsSubfertile: 0,
            currentIVF: 'no',
            hadPregnancy: 'no',
            hadEctopicPregnancy: 'no',
            liveBirth: 'no',
            miscarriages: 'no',
            maleSubfertility: 'no',
            maleSubfertilitCondition: 'none',
            page: 1,
            ages: [],
        }
    }
    onSubmit() {
        let query = `
            mutation add {
                createQuestions(input: {
                    gender: "${this.state.gender}",
                    age: ${this.state.age},
                    yearChildlessSex: "${this.state.yearChildlessSex}",
                    yearsSubfertile: ${this.state.yearsSubfertile},
                    currentIVF: "${this.state.currentIVF}",
                    hadPregnancy: "${this.state.hadPregnancy}",
                    hadEctopicPregnancy: "${this.state.hadEctopicPregnancy}",
                    liveBirth: "${this.state.liveBirth}",
                    miscarriages: "${this.state.miscarriages}",
                    maleSubfertility: "${this.state.maleSubfertility}",
                    maleSubfertilitCondition: "${this.state.maleSubfertilitCondition}",
                }) { id }
            }
        `
        API.graphql(graphqlOperation(query))
        console.log(`Submit button pressed! API JSON ${JSON.stringify(this.state)}`)
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return (
            <Container>
                <Content >
                    {page === 1 && <Age
                        onSubmit={this.nextPage} />}
                    {page === 2 &&
                        <YearTrying
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />}
                    {page === 3 &&
                        <Pregnant
                            previousPage={this.previousPage}
                            onSubmit={onSubmit}
                        />}
                </Content>
            </Container>
        );
    }
}

QuestionsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default QuestionsForm;