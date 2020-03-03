Now that you have mastered the fundamentals of React, we will build something that brings together the concepts we have learned throughout this tutorial.

#### Project Description
For this capstone project will build a simple feature that will allow users to search for a publicly traded company using their "stock ticker". Once the user clicks the "Search" button, we will then display the company profile and company financial.

**Note: The API provided here uses a random data generator to generate company profile and the financial information.
Please do not rely on the accuracy of the data because it is guaranteed to be inaccurate (it's random).
The API expects the ticker to be *3 characters* long. It will give you results if the ticker is 3 characters long and it will throw an error if the ticker is less than or greater than 3 characters. 
It also does not check if the ticker is actually a valid ticker. So any random 3 character would work.**

Below on the left is your solution, and on the right is the final solution. Try a ticker like `XYZ` on the right-hand side and click `Search` to see the expected behavior of this component.

<!--exercise-->

Don't worry about styling, it's already provided for you.

There's also an API provided to you that has two methods -
- `getCompanyProfile(ticker)` - Returns a `Promise` that resolves to the company profile information for the ticker you passed. It has fields like - description, exchange, industry, sector etc.
- `getCompanyFinancial(ticker)` -  Returns a `Promise` that resolves to the financial information for the ticker you passed. The response has fields like - price, beta, volAvg, MktCap etc.

For this project, the component skeleton is provided inside the 'src/capstone' folder, and as always, the files are heavily commented to guide you with the tasks. Please start with the `Capstone.js` file and you can go to any of the other files next. The final solution is provided in the solution folder (src/capstone/solution), however, I strongly recommend you to try on your own before looking at the solution. If you don't remember some of the concepts, please feel free to go back and refer to the appropriate tutorial page.

There are four components in this project. Just a brief word on what those components are used for:

- `Capstone` - Just named Capstone to signify that this component encapsulates our entire project. We import and use below components inside this to build our feature.
- `Search` - This component has search input and the search button.
- `CompanyProfile` - This component renders company profile. It takes a company ticker as `props` and fetches the profile data from the API and renders that data.
- `CompanyFinancial` - This component renders company financial information. It takes a company ticker as `props` and fetches the financial information data from the API and renders it.
- `DataAPI` - This is the API used to fetch the required data. You don't need to change anything on this API. Under the hood it uses a random data generator so please do not believe the data. Like mentioned above, this API will give you results as long as the ticker is 3 characters long and it will throw an error if the ticker is longer than or shorter than 3 characters. It also does not check whether or not the ticker is valid. In real life this would call an actual API that will fetch actual data, but as long as the data structure doesn't change our React code would not change. So don't worry about the API not giving actual data. It's not relevant for us to complete the task at hand.

#### Disclaimer
How we break down components to build this feature is not set in stone. The component decomposition is more often art than science. We can most definitely build this feature with just one component instead of four, or we could easily break these components into more granular pieces. Please read this [excellent article](https://reactjs.org/docs/thinking-in-react.html) on how to think about components in React.

In this project, there are certain decisions that have been made to incorporate most of the concepts we have touched on this tutorial. While what we have done definitely works, we could also achieve the same outcomes using different approaches.

#### Extra Credit
For example, one of the best practices in React is to create "stateless" components (components that do not have `state`) as possible. This doesn't necessarily mean having `state` is bad, it just means that components will be less cluttered. Stateless components receive `props` from their parent components and render something based on the provided `props`. It will make your component really dumb and that should be your goal - **make dumb components**. They are easier to test, easier to reuse and easier to reason about. So in this project, we could've created all of our child components (CompanyProfile, CompanyFinancial, Search) stateless, and [lifted all the state](https://reactjs.org/docs/lifting-state-up.html) to the parent component (Capstone). I will leave this to you as extra credit. You can refactor the code so that the child components are stateless and only the parent component has state. The parent component passes these state down to the child component as `props`.
