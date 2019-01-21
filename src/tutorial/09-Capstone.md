Now that you have mastered the fundamentals for React, we will do an exercise building something that brings together most of the concepts that we have learned throughout this tutorial.

#### Project Description
For this capstone project you need to build a simple feature where we want to allow users to search for a publicly traded company using their "stock ticker" (ex - AAPL for Apple, FB for Facebook, GOOGL for Google etc). Once the user clicks "Search" button, we want to display the company profile and company financial. 

Below on the left is your solution and on the right is the final solution. Try some ticker like `AIR` on the right hand side and click `Search` to see the results.

<!--exercise-->

There's an API already provided to you that has two methods - 
- `getCompanyProfile(ticker)` - Returns a `Promise` that resolves to the company profile information for the ticker you passed. It has fields like - CEO, description, exchange, industry etc.
- `getCompanyFinancial(ticker)` -  Returns a `Promise` that resolves to the financial information for the ticker you passed. The response has fields like - price, beta, volAvg, MktCap etc.

For this project the component skeleton is provided inside the folder () and as always the files are heavily commented to guide you with the tasks. The final solution is provided on the solution folder but I strongly recommend you to try on your own before looking at the solution. If you don't remember some concepts feel free to go back and refer to the appropriate tutorial page.

There are four components in this project. Just a brief word on what those components are used for:

- `Capstone` - I just named it Capstone to signify that this component encapsulates our entire project. We import and use below components inside this to build our feature.
- `Search` - This component has search input and the search button.
- `CompanyProfile` - This component renders company profile. It takes a company ticker as props and fetches the profile data from the API and renders it.
- `CompanyFinancial` - This component renders company financial information. It takes a company ticker as props and fetches the financial information data from the API and renders it.
- `DataAPI` - This is an API to fetch the required data. I used a [free API](https://financialmodelingprep.com/developer/docs)to fetch the actual data for given ticker. Two methods provided here uses the same API under the hood to get the data but I filter the data set to return appropriate data for each method. You don't need to worry about any of the details on this API. Just assume it gives right data when called.

*How we break down components to build this feature is not set in stone. The component decomposition is more often art than science. We can most definitely build this feature with just one component instead of four, or we could easily break these components into more granular pieces. Please read this [excellent article](https://reactjs.org/docs/thinking-in-react.html) on how to think about components in React.*

