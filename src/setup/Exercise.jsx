import React, { Component } from 'react';
import styled from 'styled-components';
import Solution from './Solution';

const Container = styled.div`
    display: flex;
`;

const SolutionContainer = styled.div`
    margin: 5px;
    width: 50%;
    min-height: 100px;
`;

const SolutionTitle = styled.div`
    padding-bottom: 10px;
    font-size: 0.9rem;
`;

class Exercise extends Component {
    render() {
        const { exercise: { location, solutionLocation } } = this.props;
        return (
            <Container>
                <SolutionContainer>
                    <SolutionTitle>Your Solution: ({location})</SolutionTitle>
                    <Solution location={location} />
                </SolutionContainer>
                <div style={{ margin: 5 }}></div>
                <SolutionContainer>
                    <SolutionTitle>Target Solution: ({solutionLocation})</SolutionTitle>
                    <Solution location={solutionLocation} finalSolution/>
                </SolutionContainer>
            </Container>

        )
    }
}

export default Exercise;
