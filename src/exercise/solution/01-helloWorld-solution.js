import React from 'react';

function HelloWorld(props){
    return (
        React.createElement('div', null, 'Hello World')
    );
}

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!
 * DO NOT DELETE OR CHANGE THIS.
 * This is how you would use your above component and 
 * the output of this code is displayed on the browser
 */
const Usage = (props) => {
    return <HelloWorld />
}

export default Usage;

