import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import Search from './Search';
import CompanyProfile from './CompanyProfile';
import CompanyFinancial from './CompanyFinancial';
import style from './style';

import DataApi from '../../api/DataApi';

const EMPTY_TICKER_MSG = 'Please type a stock ticker and click Search button.';
const ERROR_MSG = 'Couldn\'t find the ticker. Please search for appropriate ticker like - AAPL for Apple, AMZN for Amazon.'

class FinalSolution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            companyFinancial: {},
            companyProfile: {}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.updateCompanyFinancial = this.updateCompanyFinancial.bind(this);
        this.updateCompanyProfile = this.updateCompanyProfile.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleInputChange({ target: { value } }) {
        this.setState({
            company: value,
            errorMsg: '',
            companyFinancial: '',
            companyProfile: ''
        })
    }

    handleSearch() {
        DataApi.getCompanyProfile(this.state.company)
            .then(this.updateCompanyProfile)
            .catch(this.handleError);

        DataApi.getComapnyFinancial(this.state.company)
            .then(this.updateCompanyFinancial)
            .catch(this.handleError);
    }

    handleError() {
        this.setState({ errorMsg: ERROR_MSG })
    }

    updateCompanyProfile(companyProfile) {
        this.setState({ companyProfile })
    }

    updateCompanyFinancial(companyFinancial) {
        this.setState({ companyFinancial })
    }

    render() {
        const CompanyProfileComponent = (
            !isEmpty(this.state.companyProfile) &&
            !this.state.errorMsg &&
            <CompanyProfile companyProfile={this.state.companyProfile} />
        );
        const CompanyFinancialComponent = (
            !isEmpty(this.state.companyProfile) &&
            !this.state.errorMsg &&
            <CompanyFinancial companyFinancial={this.state.companyFinancial} />
        );
        const ErrorMessage = (
            this.state.errorMsg &&
            <div>{this.state.errorMsg}</div>
        )
        const EmptyTickerMessage = (
            isEmpty(this.state.companyProfile) &&
            isEmpty(this.state.companyFinancial) &&
            <div>{EMPTY_TICKER_MSG}</div>
        )
        return (
            <div style={style.container}>
                <Search searchValue={this.state.company} onInputChange={this.handleInputChange} onSearch={this.handleSearch} />
                {CompanyProfileComponent}
                {CompanyFinancialComponent}
                {this.state.errorMsg && ErrorMessage}
                {!this.state.company && EmptyTickerMessage}
            </div>
        );
    }
}

export default FinalSolution;