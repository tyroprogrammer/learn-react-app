import React, { Component } from 'react';

/**
 *🏆
 * The goal of this exercise is to get you more familiar with event handling
 * in React. Here we would render an input element and add function to handle
 * events on that input element
 */
class FancyInput extends Component<any, any> {
    constructor(props) {
        super(props);
        /**
         * 💡 Here we have initialized the state with inputValue
         */
        this.state = {
            inputValue: ''
        }

        /**
         * ✏️
         * Need to bind the handleChange function to appropriate `this`
         */
    }

    /**
     * ✏️
     * Need to get the value of the input and set it to the state
     * 🧭  Get the value of the input from the synthetic event
     *     You can get the value by using event.target.value.
     * 🧭  Set the value to the state `inputValue` by calling `setState`
     */
    handleChange(e) {

    }

    render() {

        return (
            <React.Fragment>
                {
                /**
                 * ✏️
                 * Need to pass the event handler to the input element.
                 * In this case we need to pass handleChange function to the
                 * onChange event
                 */
                }
                <input></input>
                {
                /**
                 * 💡
                 * This div will mirror the user input. For this to work though
                 * you need to add the handleChange event on the input above
                 * and update the state when the change happens on the input
                 */
                }
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
