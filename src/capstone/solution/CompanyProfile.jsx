import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import DataAPI from '../../api/DataApi';
import style from './style';

const ERROR_MSG = `Error when fetching company profile data. Please check if you entered valid stock ticker`;
class CompanyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyProfile: {},
            errorMsg: ''
        }
        this.updateCompanyProfile = this.updateCompanyProfile.bind(this);
        this.updateErrorMsg = this.updateErrorMsg.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    componentDidMount() {
        this.fetchCompanyFinancial();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.stockTicker !== prevProps.stockTicker) {
            this.fetchCompanyFinancial();
        }
    }

    fetchCompanyFinancial() {
        const { stockTicker } = this.props;
        this.updateErrorMsg('');
        if (stockTicker) {
            DataAPI.getCompanyProfile(this.props.stockTicker)
                .then(this.updateCompanyProfile)
                .catch(this.handleError)
        }
    }

    updateCompanyProfile(companyProfile) {
        this.setState({ companyProfile });
    }

    updateErrorMsg(errorMsg) {
        this.setState({ errorMsg });
    }

    handleError() {
        this.updateErrorMsg(ERROR_MSG);
        this.updateCompanyProfile({});
    }

    render() {
        const { companyProfile } = this.state;
        const { description, ...rest } = companyProfile;

        const ErrorMsg = (
            !isEmpty(this.state.errorMsg) &&
            <div>{this.state.errorMsg}</div>
        )
        const CompanyProfileSection = (
            !isEmpty(this.state.companyProfile) &&
            <div>
                <div style={style.profileDescription}>
                    {description}
                </div>
                <div style={style.profileContainer}>
                    {
                        Object.keys(rest)
                            .map(data => {
                                return (
                                    <div key={data} style={style.profileAttrContainer}>
                                        <div style={style.profileAttrTitle}>{data.toUpperCase()}</div>
                                        <div style={style.profileAttrValue}>{companyProfile[data]}</div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        )
        return (
            <div>
                {ErrorMsg}
                {CompanyProfileSection}
            </div>
        );
    }
}

export default CompanyProfile;