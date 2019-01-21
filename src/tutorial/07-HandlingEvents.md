Handling events in JSX is pretty similar to handling events in actual DOM. 
For example if we have a `button` element and we want to pass a event handler for `click` event we can pass a props called `onClick` to the button element.

```jsx
function ClickableButton(props){
    //callback function that's called when button is clicked
    const handleClick = () => { alert('Clicked') }
    return (
        <button onClick={handleClick}></button>
    )
}
```

Notice there are couple difference between how events are handled in HTML vs JSX.

1. With HTML we would have an attribute called `onclick` (all lowercased), but with JSX have a camelCased `props` called `onClick`. In JSX always use camelCase instead of lowercase like in HTML.
Ex:
- `onclick` => `onClick`
- `onmouseover` => `onMouseOver`
- `onselect` => `onSelect`
- `onchange` => `onChange`

2. With HTML we would pass a string as a value of the attribute but in JSX we passed actual function. For ex contrast above `button` in JSX to the following HTML equivalent:

```html
<button onclick="handleClick()"></button>
```

### Synthetic events

When React invokes the event-handler, it provides a [SyntheticEvent](https://reactjs.org/docs/events.html) as an argument. Not to worry about any of the details, it's a wrapper around browser's native event and it has the same interface as the native event.

```jsx
function ClickableButton(props){
    //callback function that's called when input changes
    //It gets synthetic event as an argument
    //SyntheticEvent has interface just like the native browser event
    //In this case - to get the value of the input we did e.target.value
    const handleChange = (e) => { alert(e.target.value) }
    return (
        <input onChange={handleChange} />
    )
}
```
### Function Binding

One gotcha when using event handlers with components created as `ES6` classes (by extending `React.Component`) is the method binding. This has nothing to do with React or JSX but it's new Javascript feature in `ES6` and trips even many experienced folks.

Class function in `ES6` are not bound to anything by default. For example take below example of `Input` component. Here we just have an input element whose value is assigned to `this.state.inputValue` and we are handling `onChange` event on this `input` by passing `this.handleChange` function. Inside the `handleChange` function we are calling `setState` with the new value typed by the user. Now if we run this code it will error out saying something like "Cannot read property setState of undefined". Weird huh? The reason is because `handleChange` is not bound to anything. So `this` inside `handleChange` is `undefined`.

```jsx
class Input extends React.Component {

    handleChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    render(){
        return(
            <input onChange={this.handleChange} value={this.state.inputValue}/>
        )
    }
}
```

To fix above issue we just need to `bind` the function to proper `this`. The common practice is to do that in the constructor. So below we added a line in a constructor `this.handleChange = this.handleChange.bind(this)` to bind the `handleChange` function and it would work like a charm.

```jsx
class Input extends React.Component {
    constructor(props){
        super(props);
        
        //bind handleChange function to proper this
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    render(){
        return(
            <input onChange={this.handleChange} value={this.state.inputValue}/>
        )
    }
}
```

Let's write some code. Please open the exercise file and follow the instruction on the file.

<!--exercise-->

Please read [this article](https://cmichel.io/es6-class-methods-differences/) to get more idea on the `ES6` binding dilemma.
