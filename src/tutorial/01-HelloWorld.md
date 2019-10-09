Our `HelloWorld` component will look like this:

```jsx
import React from 'react';

function HelloWorld(props){
    //function must return something
    return (
        //return should tell React to render Hello World in the browser
    );
}
```
Now the question is what do we return from this function.

The return of this function is telling React what the DOM should look like when this component is rendered on the browser. In case you're using `React.Component` approach (instead of `function` approach like above), it's what you return from `render` function that tells React what the DOM should look like when the component is rendered.

In our case let's say we want to render a `div` element that has `Hello World` text like `<div>Hello World</div>`

One way to tell React to display the above HTML is by using `React.createElement` function:

```jsx
return React.createElement('div', null, 'Hello World');
```

You should try this for yourself. Open the exercise file and edit the function to return a React element like above. Once you make the changes, save the file and you will see left panel updated with what React has rendered.

<!--exercise-->

Notice that `React.createElement` is a simple javascript function which takes three arguments. First argument is the element you want to render. In our case it's a `div` element. Second argument is any properties we want to pass to that element. In our case we are not passing anything so it's null. Third argument is the children for this component. In this case it's the text we want to display - `Hello World`. So with this we are telling React to render a div element like this:

```html
<div>
    Hello World
</div>
```

Congratulations, you have created your first Hello World React component.

Now your inquisitive mind is probably asking - how in the world React renders this thing on the browser?

## Rendering

Let's step back from React for a moment and think about how we can create the similar Hello World `div` using pure Javascript. Yes pure Javascript - without any frameworks.

### Good Ol' Days

Let's imagine you have a barebone `html` file that looks like below. It has a `div` with id `root` inside `body`. Pretty simple.

```html
<html>
    <head></head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

Now imagine inside the `div` with id `root` we want to render another `div` that says `Hello World`. The only catch is we want to do that programmatically using pure Javascript.
To achieve this we can probably do something like this:

```js
//Create a div node and append Hello World text
const helloWorldDiv = document.createElement('div');
helloWorldDiv.append('Hello World');

//Select the root node and append the div created above
const root = document.getElementById('root');
root.appendChild(helloWorldDiv);
```

Here we are creating a `div` node with `Hello World` text and appending that `div` as a child of root `div`.

We can actually write our entire application this way - creating elements, removing elements, appending elements, etc ourselves. As a matter of fact we did write applications this way before all these UI frameworks/libraries started to mushroom.

### Age of React
A simple example like the one above are not that hard to write with pure Javascript but once your application gets bigger, it gets messier. That's where libraries like React come to the rescue - they hide away from us the messier part of rendering on the browser.

The Core React library itself doesn't really know how to render anything on the browser because it is designed to work in a web browser as well as native applications. Thus the job of rendering your component on the browser is done by another library provided by React team called `ReactDOM`.

Now let's get back to the `HelloWorld` React component we created at the top of this page and see how we can use ReactDOM to render that component to the browser.

```jsx
ReactDOM.render(HelloWorld, document.getElementById('root'))
```

Here we are calling a function called `render` on `ReactDOM` object. The first argument of the function is the component you want to render - in our case `HelloWorld`. Second argument is a document selector. ReactDOM appends the component we want to display (first argument) as a child of the node returned by the selector (second argument).

Compare this solution to the pure Javascript solution we looked at earlier. With pure Javascript we were doing the DOM manipulation ourselves - creating the `div`, appending the text and appending the newly created `div` to the `div` with id `root` as its child. But with React we are not doing any DOM manipulation ourselves. Basically we are saying to React - 

> Hey React I have a component I want to render. I will tell you what the component should look like when it's rendered (remember this is what the return of the Component function tells). I will also tell you where to render this component (second argument we passed to `ReactDOM.render` function). But I don't want to get involved in DOM manipulation - I will let you do all the DOM manipulation yourself. You can call all these DOM api like `document.createElement`, `.append`, `.appendChild` etc. whenever you wish - I trust you and I don't care as long as I see on the browser what I expected to see.

Ok then how does React do it internally? We won't go into all the details of it but briefly talk about one important part of React implementation called Virtual DOM.

### Virtual DOM
[DOM (Document Object Model)](https://www.w3schools.com/js/js_htmldom.asp) is an object representation of the HTML. To see what it looks like open chrome dev tools (Right Click + Inspect) and type `console.dir(document)` and hit enter, you will see a JSON-like tree structure with fields and methods. React for it's part maintains a copy of this DOM - what's called a [virtual DOM](https://reactjs.org/docs/faq-internals.html), named so because it's not a real one, it's a virtual copy.

Why does React hold a copy of the DOM? The main reason it maintains a virtual copy of the DOM is to improve performance of the application. 
Web applications these days are very complex. User interacts with the app or the app fetches data and based on that the DOM is updated so that users sees the effects of their interaction or new data. This updating of DOM, however, is an expensive operation - creating and removing DOM nodes (like we did with `document.createElement('div')` above) are expensive. So React optimizes this updating operations using virtual DOM.

The way this roughly works is: when there's anything that will cause a UI to update (called re-render), React first updates its virtual DOM instead of real DOM. Then it compares the virtual DOMs (before and after the update). It has a heuristic algorithm to determine which piece of the DOM might have changed. Once it figures that out, it updates only the changed piece on the real DOM. Again the reason it does this is because updating the DOM is an expensive operation and it wants to optimize this piece so it only updates what is absolutely necessary instead of tearing down the entire DOM and recreating it.
