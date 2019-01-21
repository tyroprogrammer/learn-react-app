import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import DataAPI from '../../api/DataApi';
import style from './style';

const ERROR_MSG = `Error when fetching company financial data. Please check if you entered valid stock ticker`;

class CompanyFinancial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyFinancial: {},
            errorMsg: ''
        }

        this.updateCompanyFinancial = this.updateCompanyFinancial.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    componentDidMount() {
        this.fetchCompanyFinancial();
    }

    componentDidUpdate(prevProps) {
        if (this.props.stockTicker !== prevProps.stockTicker) {
            this.fetchCompanyFinancial();
        }
    }

    fetchCompanyFinancial() {
        const { stockTicker } = this.props;
        this.updateErrorMsg('');
        if (stockTicker) {
            DataAPI.getCompanyFinancial(this.props.stockTicker)
                .then(this.updateCompanyFinancial)
                .catch(this.handleError)
        }
    }

    updateCompanyFinancial(companyFinancial) {
        this.setState({ companyFinancial })
    }

    updateErrorMsg(errorMsg) {
        this.setState({ errorMsg });
    }

    handleError(error) {
        this.updateErrorMsg(ERROR_MSG);
        this.updateCompanyFinancial({});
    }

    render() {
        const { companyFinancial } = this.state;
        const ErrorMsg = (
            !isEmpty(this.state.errorMsg) &&
            <div>{this.state.errorMsg}</div>
        )
        const CompanyFinancialSection = (
            !isEmpty(this.state.companyFinancial) &&
            <div>
                <div style={style.financialTitle}>Financial</div>
                <div style={style.financialContent}>
                    {
                        Object.keys(companyFinancial)
                            .map(prop => {
                                return <div key={prop} style={style.financialMetricRow}>
                                    <div style={style.financialMetric}>
                                        {prop}
                                    </div>
                                    <div>
                                        {companyFinancial[prop]}
                                    </div>
                                </div>
                            })
                    }
                </div>

            </div>
        )
        return (
            <div style={style.financialContainer}>
                {ErrorMsg}
                {CompanyFinancialSection}
            </div>
        );
    }
}

export default CompanyFinancial;