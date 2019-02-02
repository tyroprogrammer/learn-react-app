Now that you have mastered the fundamentals of React, we will do an exercise building something that brings together most of the concepts that we have learned throughout this tutorial.

#### Project Description
For this capstone project you need to build a simple feature where we want to allow users to search for a publicly traded company using their "stock ticker" (ex - AAPL for Apple, FB for Facebook, GOOGL for Google etc). Once the user clicks "Search" button, we want to display the company profile and company financial. 

Below on the left is your solution and on the right is the final solution. Try some ticker like `AIR` on the right hand side and click `Search` to see the behavior of this component.

<!--exercise-->


Don't worry about styling, it's already provided for you.

There's also an API provided to you that has two methods - 
- `getCompanyProfile(ticker)` - Returns a `Promise` that resolves to the company profile information for the ticker you passed. It has fields like - CEO, description, exchange, industry etc.
- `getCompanyFinancial(ticker)` -  Returns a `Promise` that resolves to the financial information for the ticker you passed. The response has fields like - price, beta, volAvg, MktCap etc.

For this project the component skeleton is provided inside the folder 'capstone' folder ('src/capstone') and as always the files are heavily commented to guide you with the tasks. Please start with the `Capstone.js` file and you can go to any of the other file next. The final solution is provided on the solution folder (src/capstone/solution) but I strongly recommend you to try on your own before looking at the solution. If you don't remember some concepts feel free to go back and refer to the appropriate tutorial page.

There are four components in this project. Just a brief word on what those components are used for:

- `Capstone` - Just named it Capstone to signify that this component encapsulates our entire project. We import and use below components inside this to build our feature.
- `Search` - This component has search input and the search button.
- `CompanyProfile` - This component renders company profile. It takes a company ticker as props and fetches the profile data from the API and renders that data.
- `CompanyFinancial` - This component renders company financial information. It takes a company ticker as props and fetches the financial information data from the API and renders it.
- `DataAPI` - This is an API to fetch the required data. You don't need to change anything on this API. Under the hood, it uses a [free API](https://financialmodelingprep.com/developer/docs) to fetch the actual data for given ticker. You don't need to worry about any of the details on this API. Just assume it gives right result when called.

#### Disclaimer
How we break down components to build this feature is not set in stone. The component decomposition is more often art than science. We can most definitely build this feature with just one component instead of four, or we could easily break these components into more granular pieces. Please read this [excellent article](https://reactjs.org/docs/thinking-in-react.html) on how to think about components in React.

But in this project there are certain decisions that has been made so as to incorporate most of the concepts we have touched on this tutorial. While what we have done definitely works, we could have achieved same things in different ways.

#### Extra Credit
For example one of the best practices in React is to make components as stateless (not have any `state`) as possible. This doesn't necessarily mean having `state` is bad, it just means that components will be less cluttered, they just get props from parent and render something based on those props. It will make your component really dumb and that should be your goal - **make dumb components**. They are easier to test, easier to reuse and easier to reason about. So in this project we could have made all child component (CompanyProfile, CompanyFinancial, Search) stateless and [lifted all the state](https://reactjs.org/docs/lifting-state-up.html) to the parent component (Capstone). I will leave this to you as extra credit. You can refactor the code so that the child components are stateless and only the parent component has state. The parent component passes these state down to the child component as props.
