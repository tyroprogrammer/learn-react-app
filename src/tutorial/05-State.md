React Components can have local state. This state is not shared with the component's parent or the component's child by default. It is fully owned and controlled by the component itself.

Remember when we looked at different ways of creating React component in the first page of this tutorial, we said there are things that component extending `React.Component` can do that a `function` component cannot do? Well state is one of them. `React.Component` can have states but `function` cannot have states.

*Note: There's a new feature in React called hooks that let's us use state within function component but that's still in alpha so if we want to use state right now on a component we still need to use `React.Component`*

Below is a simple component that has a state. 

```jsx
class Component extends React.Compoent {
    constructor(props){
        super(props);
        this.state = {
            counter: 0 
        }
    }

    render() {
        return <div>{this.state.counter}</div>
    }
}
```

`state` is just an object. If you notice the constructor, we initialized the state with `{counter: 0}`. And we used the state inside the `return` of the `render` function as `{this.state.counter}`.

We initialized the `state` in the constructor but how do we update it? For eg. in the above example how do we change the `counter` to lets say 1? For that React provides a function called `setState`. You should **always** use `setState` function to change `state` and **never** mutate it directly.

```jsx
//❌  NEVER DO THIS
this.state.counter = 2;

// ✅  ALWAYS DO THIS
this.setState({
    counter: 2
});
```
If `state` is just an instance variable in the component, can we call it some other name and why do we **have** to use `setState`? Well no we cannot call it by some other name and we have to use `setState` to update the `state` mainly because React understands `state`. When `state` of your component changes, React re-renders your component (by re-render I mean calls the `render` function again to see if the DOM will change as a result of change in `state`). This is fundamental to the declarative nature of React.

### setState

Let's look deeper into `setState` function. First argument of `setState` function can take either a new state object or a function. It also has a optional second argument, which is a callback which is executed when the state is updated.

```jsx
setState(newState || function, optional callback)
```

The way `setState` updates the state is:
- If the first argument of the `setState` function is an object, it merges the current `state` object with whatever you passed to the `setState` function. For example:

```jsx
state = { a: 1, b: 2, c: 3} //current state
this.setState({ a: 3 }); //we call setState with just one key value pair

//it will **merge** the initial state with the object passed to setState
//as a result only the value for that one key is updated
state = { a: 3, b: 2, c: 3 } //state after setState is flushed
```

- If the first argument is a function then it first executes the function by passing the current `state` as it's argument. The function must return an object. It then merges this output with the current `state` just like it did above. For example:

```jsx
state = { a: 1, b: 2, c: 3} //initial state
//we called setState with a function
this.setState(currentState => ({
    a: currentState.a + 1
}));
//it executes the function by passing the current state object as argument.
//since currentState.a is 1, function returns { a: 2 }
//it now merges this returned object with the original state
state = { a: 2, b: 2, c: 3 } //state after setState is called
```

One thing you must know about `setState` function is that it may be asynchronous. So **do not** rely on it to update the state immediately. This is not a bug, it's by design. If you want to read up on the design decision behind `setState` call being asynchonous, here's a [nice explanation](https://github.com/facebook/react/issues/11527#issuecomment-360199710).

Since `setState` can be asynchronous below code will not give you the right result because by the time we `console.log` the `state.counter` value, it won't be updated.

```jsx
//❌ WRONG RESULT. Do not rely on setState to be synchronous
console.log(this.state.counter);//prints 0
this.setState({
    counter: this.state.counter + 1
}); //this is asynchronous call
console.log(this.state.counter);//still prints 0
```

Also if you want to update `state` using the current state value **always** use the updater function inside `setState` instead of passing object. For example below code will not work.

```jsx
//❌  DONT DO THIS
//If you are using the current state value to update the state, never use this.state directly inside setState
console.log(this.state.counter); //prints 0
this.setState({ counter: this.state.counter + 1 });
this.setState({ counter: this.state.counter + 1 });
this.setState({ counter: this.state.counter + 1 });
//the state will be 1 when all of the calls are flushed
//because since the calls were asynchronous, this.state.counter 
//on all three calls were 0 and adding 1 resulted in 1.


//✅  ALWAYS DO THIS
//If you are using current state value to update the state, always use updater function
console.log(this.state.counter); //prints 0
this.setState((state) => ({ counter: state.counter + 1}) );
this.setState((state) => ({ counter: state.counter + 1}) );
this.setState((state) => ({ counter: state.counter + 1}) );
//this is guaranted to work!
//when all three calls are flushed the value of
//this.state.counter will be 3
```

Let's look at an exercise. Click the '+', '-' on the right side to see the expected behavior. Now please open the exercise file and make changes as instructed in the exercise file to achieve the expected behavior.

<!--exercise-->

I know we discussed several things about `state` and it must be overwhelming. Let's just recap the rules:
- Never mutate `this.state` directly. Always use `this.setState` to update the `state`.
- If your new `state` doesn't depend on the old `state` then you can use `this.setState(object)` construct.
- If your new `state` depends on the old `state` then use `this.setState(function(currentState){ .. })` construct.

#### Props and State
Since we now have looked into both `state` and `props` how are they different and how are they similar?

The difference between `state` and `props` is that `state` is owned by the component itself while `props` is something that is passed down to the component by it's parent.

And the similarity (sort of) is that React automatically re-renders your component when either the component's `state` changes or when the component's `props` changes.

Your component's `render` function is a function of both `state` and `props` meaning it defines what your component should look like given the `state` and `props`. It should be pure function in a sense that if the component has same `state` and `props` it should render exactly same content no matter how many times it's called and shouldn't have any side effects.
