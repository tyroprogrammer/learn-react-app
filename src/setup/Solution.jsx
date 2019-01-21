import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FileReader from '../FileReader';

const SolutionContainer = styled.div`
    padding: 10px;
    border: 1px solid gray;
    height: calc(100% - 30px);
    background-color: ${props => props.finalSolution ? "#dbe4d8" : "#e3e4e4"};
`
class Solution extends Component {
    constructor(props){
        super(props);
        this.state = {
            solutionUsage: () => <div></div>
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.location !== this.props.location){
            this.loadSolution();
        }
    }

    componentDidMount(){
        this.loadSolution();
    }

    componentDidCatch(e){
        console.log('error', e);
    }

    loadSolution(){
        FileReader.readFile(`${this.props.location}`)
        .then(solutionUsage => {
            this.setState({ solutionUsage });
        })
    }

    render(){
        if (this.props.location) {
            const SolutionUsage = this.state.solutionUsage;
            return (
                <SolutionContainer finalSolution={this.props.finalSolution}>
                    <SolutionUsage />
                </SolutionContainer>
            )
        }
        return (<div></div>)
    }   
}

Solution.propTypes = {
    //location of the example file to be rendered
    location: PropTypes.string.isRequired,

    finalSolution: PropTypes.bool
}

export default Solution;


