export default ` [React](https://reactjs.org) is a flexible and declarative framework for building UI. React lets us build reusable "components" and compose those components to build any UI. Don't worry about what this all means right now, once you get through the tutorial you'll have a better idea. Let's start with Components.

### Component 

Components are building block of your UI - similar to directives in angular, or modules and widgets in other frameworks. Components in React are more or less self sufficient in that it constitues the presentation (HTML) as well as the behavior (eg. event handlers). They are also composable - meaning we can easily use one component within other component. So how do we create a Component? There are couple common ways how you can create a React component.

#### 1. React.Component

One way to create a React component is to create ES6 \`class\` and extend \`React.Component\`. Each component created using this method should have a \`render\` function that returns what the DOM should look like if this component is rendered on the browser.

\`\`\`jsx
import React from 'react';

class Component extends React.Component {
    //needs render function
    render(){
        return(
            //return should tell React what the DOM should look like
            //if this component is rendered in the browser
        )
    }
}
\`\`\`

#### 2. function
Another common way to create a React component is to create a simple function that takes in a parameter (we call \`props\`) and returns the exact same thing as above - what the DOM should look like if this component is rendered on the browser.

\`\`\`jsx
function Component(props){
    return (
        //return should tell React what the DOM should look like
        //if this component is rendered in the browser
    )
}
\`\`\`
*Note: Components that are user-defined - meaning the components that you and I write and are not available in the React implementation itself - must have [first letter capital](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized).*

The above two approaches are identical except there are certain things that \`React.Component\` can do that the \`function\` cannot do but we will park that for now and we'll come back to it later in this tutorial.

Lets build our first \`HelloWorld\` React Component.
 `