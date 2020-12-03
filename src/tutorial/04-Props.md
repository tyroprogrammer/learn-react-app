Let's continue with the earlier example where we displayed company profile of `AAPL`. Let's say I want to display the Company Profile for `FB` at some other place in the application. Since we have two variables `ticker` and `companyProfileInfo` hard-coded inside this component, should we copy and paste the entire component to some other place and replace the `ticker` and `companyProfileInfo` to be that of `FB`?

 Well, no. Remember that React is about building reusable Components. So we want to build a component called `CompanyProfile` that can be reused for any company ticker.

 Let's look at the `CompanyProfile` component again. Here we have two variables `ticker` and `companyProfileInfo`. So what if instead of hard coding the values of these two variables here inside the component, we could pass those values to this component instead?

If we were to pass these values to this component from outside, then this Component will not be tied to one Company ticker. We can pass in `XYZ` and it's profile info to this component and it should be able to render the profile for `XYZ` or any other company for that matter. This component becomes truly reusable. Wonderful, that's what we want.

```jsx
function CompanyProfile(props) {
    //Instead of storing these variables we want to pass
    //these values to this component from outside.
    const ticker = //pass the value for this variable from outside
    const companyProfileInfo = //pass the value for this variable from outside
    return (
        <div>
            <div>Profile of: {ticker}</div>
            <div>
                {
                    Object.keys(companyProfileInfo)
                        .map((key, index) => {
                            return <div>{key}: {companyProfileInfo[key]}</div>
                        })
                }
            </div>
        </div>
    )
}
```

Well then how do we pass these values to a component from outside? That's where `props` comes in. In React lingo, `props` is something that the component is passed by the user of that component (parent component passes `props` to child component).
You can pass anything as a prop: `function`, `object`, `boolean`, `string`, `number`, etc. Here's an example of a Component passing the `props` to its children.

```jsx
function Children(props) {
    return (
        <div>{props.textToDisplay}</div>
    )
}

function Parent(props) {
    return (
        <Children textToDisplay={'Hello'}></Children>
    )
}
```
There are couple things going on here. First - remember on the [first page of this tutorial](/tutorial/react-introduction) we said that we can compose components (we can use one component inside the other)? Well that's what we are doing here. `Parent` component uses `Children` component inside it's return.

Second - if you inspect the above code snippet carefully, we see that when the `Parent` uses the `Children` (inside `return`) it's also passing something called `textToDisplay` with some value `Hello`. We call this "passing the props". So `Parent` is passing a `props` called `textToDisplay` to the `Children`. How, then, does the `Children` use the value that the `Parent` passes down to it?

1. Component created with function

    If you created your component as a `function` like we did here, all the `props` its `Parent` passed down will be accessible through the argument. If you look at the `Children` above it's using `props.textToDisplay` inside the `div`. All the `props` passed to the `Children` are passed as this single `props` argument. For example, if the `Parent` had passed a props called `defaultValue`, the `Children` would access it as `props.defaultValue`.

2. Component created as React.Component

    If you created your Component by extending `React.Component` then all the `props` would be available as `this.props`. The equivalent of above `Children` function using `React.Component` would look like this:

```jsx
class Children extends React.Component {
    render(){
        return (
            <div>{this.props.textToDisplay}</div>
        )
    }
}
```

Now that we know what `props` are, lets do some exercise and see how we can make `CompanyProfile` component reusable.

<!--exercise-->


One thing you must remember regarding `props` is that you should **never** mutate `props` - React will complain if you do. This is something given to the component by it's parent - accept with love and don't try to mess around with things to make your parent angry!

```jsx
function Children(props) {
    //❌  NEVER DO THIS
    props.textToDisplay = 'I want to mutate props'
    return (
        <div>{props.textToDisplay}</div>
    )
}
```

### PropTypes
In many cases it's better for a component to clearly define a contract regarding the `props` it can accept - data type, data structure, if the props is required etc.
There are couple obvious benefits of this:
- React can enforce type checking to avoid many bugs arising from parents passing props with a type that's different from what the children expects (ex. parent passing `string` when children expects an `object`).
- If you are writing components that will be used by different people at different parts of the application, it's always useful for those users to know what are the props they can pass, what is the expected structure of the props etc.

To define this contract - first you need to add `prop-types` as a [project dependency (provided by React team)](https://www.npmjs.com/package/prop-types) and you need to define a special property called `propTypes` in your component.

```jsx
import React from 'react';
import PropTypes from 'prop-types';

class SoftwareEngineer extends React.Component {
    render(){
        return (...)
    }
}

//defines "propTypes" property in this component
SoftwareEngineer.propTypes = {
    name: PropTypes.string.isRequired, //expects string and is required
    hobbies: PropTypes.arrayOf(PropTypes.string), //expects array of string
    address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string
    }) //must be an object with 'street' and 'city' fields
}
```
Here we have defined the `propTypes` property and assigned an object. Each key in this object represents the name of the `props` the user of this component can pass. The value defines the "type" of the `props` - you know: `string`, `number`, `array`, etc. All `props` are optional (user of the component doesn't have to pass them) except the one that has `.isRequired`. Here's a quick explanation on three `props` defined above:
- `name` - It expects the value of this `props` to be a `string` and it's required because, well, it has `.isRequired`.
- `hobbies` - It's optional but if passed it must be an array of strings.
- `address` - It's also optional but if passed it must be an object with two fields - `street` and `city` - and both must be string.

These are just some examples of what you can do to enable type checking. There are plenty more types you can define - please check out [the documentation](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) for more.

### Default Props
In some cases you might want to define a default value for a `props` in case it is not passed to you.
You can use `defaultProps` property to define your defaults. With this you're basically saying - "if someone doesn't pass me a value for a `props` that I'm expecting, then I want the value of that `props` to be what I have defined in the `defaultProps`". For example - for the above component we can define `defaultProps` as follows:

```jsx
import React from 'react';
import PropTypes from 'prop-types';

class SoftwareEngineer extends React.Component {
    render(){
        //if this props is not passed, it will print default value as defined by `defaultProps`
        console.log(this.props.hobbies);

        //if this props is not passed, it will print `undefined` because we haven't defined any default value for this props
        console.log(this.props.address);
        return (...)
    }
}

//defines "defaultProps" property in this component
SoftwareEngineer.defaultProps = {
    hobbies: ['Writing React code']
}
```

Let's say if the user of this component doesn't pass any value for `hobbies`, then it will be defaulted to `['Writing React code']`.
And if the user of the component doesn't pass any value for `address` then it will resolve to `undefined` because we haven't defined the default value for it.
