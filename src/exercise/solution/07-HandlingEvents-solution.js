import React, { Component } from 'react';

class FancyInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={this.handleChange}></input>
                <div>You typed: {this.state.inputValue}</div>
            </React.Fragment>

        )
    }
}

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component 
 * The output of this code is displayed on the browser on the left hand side
 */
const Usage = (props) => {
    return <FancyInput />
}

export default Usage;