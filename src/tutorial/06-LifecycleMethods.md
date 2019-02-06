React provides a way to take some actions on different lifecycle phases of the component. There are several benefits of  that. For example we may want to fetch some data when a component is rendered, or clean up some resources before the component is removed from the DOM. React calls these lifecycle methods (if we have defined them) during these lifecycle phases. You are not required to implement any of these lifecycle methods and implement only those that you need on your particular component. 

```jsx
class ComponentWithLifecycle extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //This will be called after the component is mounted to the DOM
    }

    componentDidUpdate(prevProps, prevState){
        //This will be called after the component is updated
        //Remember component can only be updated when the state changes
        //or the props changes
    }

    componentWillUnmount(){
        //This will be called right before this component is unmounted from
        //the DOM
    }
}
```

Lets look at some common use cases of when these lifecycle methods comes in handy.

Let's consider the `CompanyProfile` example we looked at earlier where we were displaying the `ticker` and the `companyProfileInformation`. On the example the parent of the component passed both `ticker` and `companyProfileInformation` as `props`. But let's assume that parent only has the `ticker` information which it will pass as `props` but it doesn't have the profile information data. Assume there's an API that the `CompanyProfile` component can use to fetch the profile information data. This is very common use case. So how/when should the `CompanyProfile` component fetch the data. `componentDidMount` is the right lifecycle method to make the network call (fetch data using the API). This method is called only once when the component is mounted on the DOM. After the API returns the data we can set the data to the `state` and use `this.state.companyProfileInformation` instead of `this.props.companyProfileInformation` inside the `render` function.
Remember in this case the parent didn't pass the `companyProfileInformation` props but instead `CompanyProfile` fetched that data itself and stored in the `state`.

```jsx
import DataApi from '../api';

class CompanyProfile extends React.Component {
    componentDidMount() {
        DataApi.getCompanyProfile(this.props.ticker)
        .then(profile => {
            this.setState({
                companyProfileInformation: profile
            })
        })
    }
}
```

Let's do the same exercise. Please open the exercise file and make the change as instructed on the file.

<!--exercise-->

That works for the initial value of `ticker` passed by parent because `componentDidMount` is called only once but what happens when the `props` changes - meaning the parent component passes a new `ticker` value. How/When would `CompanyProfile` component know to fetch data again for the new `ticker`? In that case you can use `componentDidUpdate`. This lifecycle method is called every time component is updated. Remember component is updated every time the `props` or the `state` changes. 

You're probably thinking - 'This doesn't sound good'. If you were to fetch the data inside `componentDidUpdate` (which would be called every time your component updates), your component will make a lot of repetitive network calls to get the profile information for same ticker because the component might have updated not just when `ticker` props changed but when any other `props` changed or some other `state` changed.
Well you're thinking correctly. That's the reason why you should **always** check if the `props` you are interested in changed (in this case `ticker` changed) before making the network request.

```jsx
import DataApi from '../api';

class CompanyProfile extends React.Component {
    //when react calls componentDidUpdate, it gives as argument the value of
    // props and state before the update happened so you can do the comparision
    componentDidUpdate(prevProps, prevState) {
        //always be defensive otherwise you will make a lot of 
        //unnecessary network calls
        //in this case we only make the network call if the
        //ticker props before and after the component updated are not same
        if (prevProps.ticker !== this.props.ticker) {
            DataApi.getCompanyProfile(this.props.ticker)
            .then(profile => {
                this.setState({
                    companyProfileInformation: profile
                })
            })
        }
    }
}

```

These are just some common use cases when you want to use lifecycle methods provided by React. Please refer to the
[React documentations](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
for extensive list of all the lifecycle methods available.

Also note that there are some lifecycle methods that were available as part of earlier version of React (16 and earlier) but they will be deprecated as part of version 17.0, so **DO NOT** use them.

- componentWillMount
- componentWillUpdate
- componentWillReceiveProps

Please refer to this [blog post](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) to understand why these lifecycle methods are being deprecated and also more about some best practices regarding usage of lifecycle methods.
