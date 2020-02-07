import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import Search from './Search';
import CompanyProfile from './CompanyProfile';
import CompanyFinancial from './CompanyFinancial';
import style from './solution/style';

const EMPTY_TICKER_MSG = 'Please type a stock ticker and click Search button.';

/**
 * 🏆
 * The goal of this capstone project is to bring together most of the 
 * concepts you have learned in this tutorial together by building this feature.
 * The feature we are building is pretty straight forward. There's an input
 * field and a search button. When the user types in a valid stock ticker and
 * clicks Search button, it will display the company profile as well as
 * company financial for the given stock ticker selected.
 */
class Capstone extends Component {
    constructor(props) {
        super(props);
        //💡 Always initialize the state with whatever you think is appropriate default value
        this.state = {
            stockTicker: ''
        }

        //✏️  Bind the handleSearch function below to appropriate `this`
        // this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(stockTicker) {
        /**
         * ✏️ 
         * When this method is called, it will be given a stockTicker 
         * as an argument. You need to call setState to set the stockTicker
         * state to the value provided to this function
         */
    }

    render() {
        /**
         * ✏️ 
         * We want to render a message if no stock ticker has been searched.
         * We want to conditionally render the EMPTY_TICKER_MSG that's already provided
         * 🧭 There's an isEmpty function that's already imported. Use that
         *  to check if the stockTicker state is empty
         *      Like: isEmpty(this.state.stockTicker)
         * 🧭  If it is empty assign <div>{EMPTY_TICKER_MSG}</div> to EmptyTickerMessage
         * 🧭  If the stockTicker is not empty assign null to EmptyTickerMessage
         * You can either use ternery operator - 
         *      const a = isEmpty(b) ? c : null;
         * OR you can use '&&' operator -
         *      const a = isEmpty(b) && c;
         * Both ways you are telling EmptyTickerMessage to display the div with the
         * error message only when the stockTicker state is empty
         */
        const EmptyTickerMessage = null;

        /**
         * 💡 Some things to note below inside the return:
         * 1. We are passing `handleSearch` function to `Search` component as `onSearch` props.
         *    `Search` component will execute this props when the user clicks Search button.
         *     and it will pass the current value on the input field as an argument to this function.
         *     Remember above we updated the state when this function is called
         * 2. We are passing `stockTicker` props to both `CompanyProfile` and 
         *    `CompanyFinancial` components. These components should use the `stockTicker`
         *    props to fetch the appropriate data from the API provided and render it.
         * 3. We have a line like {EmptyTickerMessage}. It's the constant we defined above.
         *    We assigned a JSX to a constant and rendered it here inside curly braces.
         *    This is a cool thing about JSX. They can be passed around like any object or function or data.
         */
        return (
            <div style={style.container}>
                <Search onSearch={this.handleSearch} />
                <CompanyProfile stockTicker={this.state.stockTicker} />
                <CompanyFinancial stockTicker={this.state.stockTicker} />
                {EmptyTickerMessage}
            </div>
        );
    }
}

export default Capstone;