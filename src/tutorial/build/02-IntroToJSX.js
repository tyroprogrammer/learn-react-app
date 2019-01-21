export default ` Another alternative way of telling React what to render is by using JSX. JSX is a very common and recommended way (preferred than \`React.createElement\` syntax in most cases) to write React code. JSX is a funny looking syntax though - its not purely HTML, its not purely Javascript. But its extension of Javascript where you can write HTML like syntax with full power of Javascript. For example, the equivalent of return statement we saw in [previous page](/tutorial/hello-world) (using \`React.createElement\`) in JSX would be:

\`\`\`jsx
return (
    <div>Hello World</div>
)
\`\`\`

Instead of returing Javascript code, its returing HTML-like code (it's not HTML) and notice it's not a string. Wait, what?!! Welcome to JSX!

You don't trust that this weird syntax works, do you? Open the exercise file and edit the return statement with the JSX and save to see the magic happen!

<!--exercise-->

Although you write HTML looking syntax, your JSX code is compiled into Javascript function like the one we saw in the previous page. The above JSX code is compiled into:

\`\`\`jsx
return React.createElement('div', null, 'Hello World');
\`\`\`

So writing above JSX code or \`React.createElement\` code will generate exactly same output on the browser. You can definitely write all your React code using \`React.createElement\` and not ever care about JSX. But it's gonna get pretty complicated pretty soon. Imagine writing all the nested \`React.createElement\` functions for generating simple HTML like below:

\`\`\`html
<table>
    <thead>
        <th>
            <td>Col</td>
        </th>
    </thead>
    <tbody>
        <tr>
            <td>Cell</td>
        </tr>
    </tbody>
</table>
\`\`\`
You'd have to write something this this, which is not very pretty:
\`\`\`js
React.createElement('table', null, 
    [
        React.createElement('thead', null, 
            React.createElement('th', null,
                React.createElement('td', null, 'Col')
            )
        ),
        React.createElement('tbody', null, 
            React.createElement('tr', null,
                React.createElement('td', 'null', 'Cell')
            )
        )
    ]
\`\`\`
So in essence JSX is nothing more than a syntatic sugar for complicated \`React.createElement\` functions to make React code more elegant and readable.
 `