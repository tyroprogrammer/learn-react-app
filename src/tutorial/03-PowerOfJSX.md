In the previous page we looked at JSX syntax where we displayed a string `Hello World` inside the `div` element. What's the big deal! What else can it do for us?

Since JSX is technically Javascript it is pretty powerful in many sense. It can do everything that Javascript can do.

If you want to execute any Javascript code within JSX then you surround your Javascript code with curly braces `{ //javascript code }` and put it inside anywhere in JSX. It will evaluate your code everytime it renders the component to find out what it should render on the browser.

For example lets imagine we want to display a company profile information and a Company ticker. And imagine the Company ticker is stored on some variable somewhere and the company profile information is stored in another variable as an object. In that case we might write:

```jsx
function CompanyProfile(props) {
    //ticker and companyProfileInfo stored in a variable
    const ticker = 'AAPL';
    const companyProfileInfo = {
        'Company Name': 'Apple Inc.',
        'Exchange': 'Nasdaq',
        'Sector': 'Technology',
        'Industry': 'Computer Hardware',
        'CEO': 'Timothy D. Cook'
    };
    return (
        <div>
            <div>Profile of: {ticker}</div>
            <div>
                {
                    {/*This is javascript code inside the curly braces*/}
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

The HTML output of the above Component when it's rendered will be:

```html
<div>
    <div>Profile of: AAPL</div>
    <div>
        <div>Company Name: Apple Inc.</div>
        <div>Exchange: Nasdaq</div>
        <div>Sector: Technology</div>
        <div>Industry: Computer Hardware</div>
        <div>CEO: Timothy D. Cook</div>
    </div>
</div>
```

Well that's a handful, so let's review what's happening here. We have a `ticker` variable assigned to a value `AAPL` and an object `companyProfileInfo` that has company profile. Inside the JSX (inside the `return` statement) we have a `div` enclosing everything. In JSX, **a component must return one and only one enclosing tag**. That tag can have as many children as it wants.
```jsx
// ❌ This is illegal in React since the return has more than one tag.
return ( 
    <div></div>
    <div></div>
)

// ✅ This is perfectly legal because there is just one enclosing tag and
// it can have as many children as it likes
return (
    <div>
        <div>
            <div></div>
        </div>
        <div></div>
    </div>
)

// ✅  If you don't want to wrap your component with some enclosing tag like `div`
// you can wrap everything with `React.Fragment` which is an empty tag provided by React
return (
    <React.Fragment>
        <div></div>
        <div></div>
    </React.Fragment>
)
```

Going back to the company profile example, the first child of the enclosing `div` is another `div`. Inside that `div` we used curly braces to display the `ticker` alongside `Profile of:`. Remember curly braces is how we inject Javascript code inside JSX. So here the `ticker` variable would be evaluated and rendered inside that `div` tag. Then we have another `div` as a second children of the enclosing parent. Inside this `div` we again have curly braces and we executed some Javascript code. In this case we mapped each key of the `companyProfileInfo` object to a `div` element. The content of this `div` is again evaluated using another curly braces like: `{key} : {companyProfileInfo[key]}`. What we did here is told React that for each key of the `companyProfileInfo` object we want to render a `div` whose content would be the `key` followed by a colon `:` followed by corresponding value for the key on the object (`companyProfileInfo[key]`).

Let's write some code here to hit the nail on the head. Please open the exercise file and follow the instructions.

<!--exercise-->

Key takeaways:
- Components must return only one tag. This tag can have as many children as it likes. Instead of a tag, it can however return a string or null.
- You can run any Javascript code inside the `return` using curly braces `{//run any Javascript}`.
- Outside of the `return` it's exactly like any other Javascript class or function. You can do whatever you desire to do.

### Differences with HTML

There are some commonly used things that are slightly different in JSX than in HTML.

- Styles

In HTML, styles are passed as string. The css properties are kebab-cased.

```html
<div style="bottom-border: 1px solid green"></div>
```

In JSX, styles are passed as an object. The css properties are camelCased.

```jsx 
<div style={{ bottomBorder: `1px solid green`}}></div>
```

- Class

In HTML class attribute is passed as string.

```html
<div class="container"></div>
```

In JSX also class attribute is passed as string but instead of calling it `class` we call it `className`. That's because JSX is extension of Javascript and "class" is a reserved keyword in Javascript.

```jsx 
<div className={"container"}></div>
```
- Event Handler

In HTML event handler attribute is all lower cased and the handlers are passed as string.

```html
<div onclick="clickHandler()"></div>
```

In JSX, event handler are camelCased and instead of string we pass the actual function.

```jsx
<div onClick={function(){ alert('clicked')}}></div>
```

We will look more into [event handler](/tutorial/handling-events) later in the tutorial.
