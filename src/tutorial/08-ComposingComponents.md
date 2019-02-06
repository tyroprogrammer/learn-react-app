One of the most important characteristics of React is that it lets you compose different components to build your UI.

Let's think about a use case. Imagine we want to build a reusable `Dialog` component. Assume it's a simple dialog component - nothing fancy. When this component is rendered we want to display some content within a modal window.

```jsx
class Dialog extends React.Component {
    render(){
        return (
            <div className={'dialog'}>
                //display content of dialog
                //????? but we don't know what to display
            </div>
        )
    }
}
```
That sounds simple except we don't know what the content of the dialog is going to be. Imagine at one place we might want to display an employee contact within a dialog and at some other place we might want to display a grid. This component itself has no knowledge of it beforehand. And if we wanted to make this component truly reusable it **should not** have any knowledge of it beforehand.

The job of the `Dialog` component is to render a modal window but it shouldn't care about the content - we should be able to use this component at different places to render different things.

How do we tell this dialog to display different things?

There are couple common patterns used in React to do this.

1. props.children

One way to achieve this goal of reusing `Dialog` anywhere we like without `Dialog` having to know what it's displaying is by using the `children` props. Let's look at one potential usage of `Dialog` component below to understand this:

```jsx
//Displays EmployeeProfile inside a Dialog
class EmployeeProfileDialog extends React.Component {
    render(){
        //We have passed a child component inside the Dialog
        return (
            <Dialog>
                <EmployeeProfile />
            </Dialog>
        )
    }
}
```
Here we have a component called `EmployeeProfile` (any other valid React component would also work here) as a "child" of `Dialog`. When we pass a "child" to a component it will be available inside that component as a `props` called `children`. So in this case, `EmployeeProfile` will be available inside the `Dialog` component as `props.children`. We can rewrite render function of `Dialog` so that it renders `props.children`.

```jsx
class Dialog extends React.Component {
    render(){
        //Render the children provided to this component
        //Here we don't really care what the children is
        return (
            <div className={'dialog'}>
                {this.props.children}
            </div>
        )
    }
}
```
Think about what we did here. The `Dialog` component really doesn't know what it's `children` would be beforehand. Whoever is using this `Dialog` component can pass in any `children` that they like. Within the `render` function `Dialog` says - hey I'll display anything my user passes me as `children`, I don't need to know what that is.

This my friend is composition and this is mighty powerful if you want to write reusable components.

2. render props

Another pattern to achieve a similar thing in React is by using what's known as "render props" pattern.

So now let's take the same dialog example but let's make it more sophisticated. Imagine the dialog has a header, body and footer section. We want the user of this component to be able to display anything they like within either of those three sections.

```jsx
class Dialog extends React.Component {
    render(){
        return (
            <div className={'dialog'}>
                <div className={'dialogHeader'}>
                {
                /** user of this component should be able to display any header inside here */
                }
                </div>
                <div className={'dialogBody'}>
                {
                /** user of this component should be able to display any body inside here */
                }
                </div>
                <div className={'dialogFooter'}>
                {
                /** user of this component should be able to display any footer inside here */
                }
                </div>
            </div>
        )
    }
}
```

The `props.children` approach we used above might not work well here. All the children we pass as "children" would be available as `props.children` and it might be little cumbersome to split the children into our three segments - "header", "body" and "footer". Wouldn't it be nice if we could tell the `Dialog` component explicitly what it should render within each "header", "body" and "footer" section?

We can use the "render props" pattern to do exactly that. All this means is that we can pass three render functions as `props` that tells the dialog what it should render inside each segment. For example, lets look at a usage:

```jsx
class EmployeeProfileDialog extends React.Component {
    render(){
        return (
            <Dialog
                renderHeader={() => <EmployeeProfileHeader />}
                renderBody={() => <EmployeeProfileBody />}
                renderFooter={() => <EmployeeProfileFooter />}
            />
        )
    }
}
```
Here, all we are really doing is passing three different `props` called `renderHeader`, `renderBody` and `renderFooter`. They are all just functions, and when called will return the appropriate React component to display. Now we can edit the `Dialog` component to get it working as expected:

```jsx
class Dialog extends React.Component {
    render(){
        return (
            <div className={'dialog'}>
                <div className={'dialogHeader'}>
                    {this.props.renderHeader()}
                </div>
                <div className={'dialogBody'}>
                    {this.props.renderBody()}
                </div>
                <div className={'dialogFooter'}>
                    {this.props.renderFooter()}
                </div>
            </div>
        )
    }
}
```

Here, instead of displaying `this.props.children` like we did previously, we executed the different `props` functions as appropriate on the different sections. Whatever is returned from that function during runtime will be displayed within that section. The `Dialog` component remains completely agnostic to what it's displaying.

Let's do some exercises shall we? Please open the exercise file and follow the instructions to make the appropriate changes.

<!--exercise-->

There are three things I would like you to note here:

1. We named those props above with `render` prefix (`renderHeader`, `renderFooter` etc) but it's just a naming convention, we could have named it anything. It's just nice to prefix it with `render` because someone looking at our code would easily be able tell that we are using this `props` function to render something.

2. The "render" props we passed is just any regular javascript function, its just that it's returning some component. We can do really anything here that we can do in a javascript function. When we called these function inside the `Dialog` we could pass some arguments if we like. The only limit here really is your imagination.

3. We can pass around components in React as `props`, just like we can pass an object or string or function. At the end of the day, React components are just functions. So take the liberty of passing it around.