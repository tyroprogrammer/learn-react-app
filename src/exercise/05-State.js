import React, { Component } from 'react';

/**
 * 🏆
 * Here we have a Counter component that display the current value of the counter
 * It also has two buttons to increase ('+') or decrease('-') the counter.
 * The counter value will be stored in the state.
 * You need to update the state to add 1 to the counter when
 * "+" is clicked and substract 1 to the current when "-" is clicked
 */
class Counter extends Component {
    constructor(props){
        super(props);
        /**
         * ✏️ 
         * Initialize a state here with initial value of counter set to 0
         * this.state = { counter: defaultValue }
         */
        this.state = {
            counter: 0
        };

        /**
         * 💡 
         * We are binding the methods here, don't worry about this right now
         * We will look at why we do this later in the tutorial
         */
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    /**
     *💡 
     * This method will be called when the user clicks "+" button to increase the counter
     */
    increment(){
        this.setState((state)=> ({counter: state.counter + 1}) );
        /**
         * ✏️ 
         * You need to call setState here to update the `counter` state
         * When user clicks the "+" we need to add 1 to the current state and
         * set the state with the new value.
         * We need to use value of current state to derive the new state,
         * so it's better to use the updater function like
         *      this.setState(function(currentState) {
         *              return newState 
         *      });         
         */
    }

    /**
     *💡 
     * This method will be called when the user clicks "-" button to decrease the counter
     */
    decrement(){
        this.setState((state) => ({counter: state.counter - 1}) );
        /**
         * ✏️ 
         * You need to call setState here to update the `counter` state
         * When user clicks the "-" we need to subtract 1 to the current state and
         * set the state with the new value.
         * We need to use value of current state to derive the new state,
         * so it's better for us to use the updater function like
         *      this.setState(function(currentState) {
         *              return newState 
         *      });
         */
    }

    render() {
        return (
            <div style={style.container}>
                <div style={style.buttons} 
                    onClick={this.decrement}>
                    -
                </div>
                <div style={style.counter}>
                    {this.state.counter}
                </div>
                <div style={style.buttons} 
                    onClick={this.increment}>
                    +
                </div>
            </div>
        );
    }
}

/**
 * 💡 
 * This is just some styling used
 * You don't need to worry about this or change this
 */
const style = {
    container: {
        display: 'flex'
    },
    buttons: { 
        padding: `0px 7px 0px 7px`, 
        backgroundColor: 'grey', 
        cursor: 'pointer'
    },
    counter: {
        padding: `0px 7px 0px 7px`
    }
}


/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component and 
 * the output of this code is displayed on the browser
 */
const Usage = (props) => {
    return <Counter />
};

export default Usage;