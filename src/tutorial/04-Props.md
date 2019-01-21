Let continue with the earlier example where we displayed company profile of `APPL`. Let's say I want to display the Company Profile for `FB` at some other place in the application. Since we have two variables `ticker` and `companyProfileInfo` hard-coded inside this component should I copy and paste the entire component to some other place and replace the `ticker` and `companyProfileInfo` to be that of `FB`?

 Well, no. Remember React is about building reusable Components. So we want to build a component called `CompanyProfile` that can be reused for any company ticker.

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

Well then how do we pass these values to a component from outside? That's where `props` comes in. In React lingo, `props` are something that the component is passed by the user of that component (parent component passes `props` to child component). 
You can pass anything as a props - `function`, `object`, `boolean`, `string`, `number` etc. Here's an example of a Component passing the `props` to its children.

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
There are couple things going on here. First - remember on the first page of this tutorial we said that we can compose components (we can use one component inside the other)? Well that's what we are doing here. `Parent` component uses `Children` component inside it's return.

Second - if you inspect the above code snippet carefully, we see that when the `Parent` uses the `Children` (inside `return`) it's also passing something called `textToDisplay` with some value `Hello`. We call this "passing the props". So `Parent` is passing a `props` called `textToDisplay` to the `Children`. How, then, does the `Children` use the value that the `Parent` passes down to it?

1. Component created with function

    If you created your component as a `function` like we did here, all the `props` its `Parent` passed down will be accessible through the argument. If you look at the `Children` above it's using `props.textToDisplay` inside the `div`. All the `props` passed to the `Children` are passed as this single `props` argument. For example, if the `Parent` had passed a props called `defaultValue`, the `Children` would access it as `props.defaultValue`.

2. Component created as React.Component

    If you created your Component by extending `React.Component` then all the `props` would be avaible as `this.props`. The equivalent of above `Children` function using `React.Component` would look like this:

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
