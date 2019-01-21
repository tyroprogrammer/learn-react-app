Our `HelloWorld` component will look like this:

```jsx
function HelloWorld(props){
    //function must return something
    return(
        //return should tell React to render Hello World in the browser
    )
}
```
Now the question is what do we return from this function.

React renders on the broswer what you return from this function component. So basically return is telling React what the DOM should look like when rendering this component on the browser. In case if you're using `React.Component` approach (instead of `function` approach like above), it's what you return from `render` function that tells React what the DOM should look like when the component is rendered.

In our case let's say we want to render a `div` element that has `Hello World` text like `<div>Hello World</div>`

One way to tell React to display the above HTML is by using `React.createElement` function:

```jsx
return React.createElement('div', null, 'Hello World');
```

You should try this for yourself. Open the exercise file and edit the function to return a React element like above. Once you make the changes, save the file and you will see left panel updated with what React has rendered.

<!--exercise-->

Notice that `React.createElement` is a simple javascript function which takes three arguments. First argument is the element you want to render. In our case its a `div` element. Second argument is any properties we want to pass to that element. In our case we are not passing anything so it's null. Third argument is the children for this component. In this case it's the text we want to display - `Hello World`. So with this we are telling React to render a div element on the DOM like this:

```html
<div>
    Hello World
</div>
```
