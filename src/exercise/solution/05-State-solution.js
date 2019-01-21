import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState(oldState => {
            return { counter: oldState.counter + 1 }
        });
    }

    decrement(){
        this.setState(oldState => {
            return { counter: oldState.counter - 1 }
        });
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