import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import Search from './Search';
import CompanyProfile from './CompanyProfile';
import CompanyFinancial from './CompanyFinancial';
import style from './style';

const EMPTY_TICKER_MSG = 'Please type a stock ticker and click Search button.';

class Capstone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockTicker: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(stockTicker) {
        this.setState({ stockTicker });
    }

    render() {
        const EmptyTickerMessage = (
            isEmpty(this.state.stockTicker) &&
            <div>{EMPTY_TICKER_MSG}</div>
        )
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