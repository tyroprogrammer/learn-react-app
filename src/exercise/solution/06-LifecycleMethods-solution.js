import React, { Component } from 'react';
import DataAPI from '../../api/DataApi';

class CompanyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyProfileInfo: {}
        }
    }

    componentDidMount() {
        DataAPI.getCompanyProfile(this.props.stockTicker)
            .then(data => {
                this.setState({
                    companyProfileInfo: data
                })
            })
    }

    render() {
        const stockTicker = this.props.stockTicker;
        const companyProfileInfo = this.state.companyProfileInfo;
        return (
            <div>
                <div>Profile of: {stockTicker}</div>
                <hr />
                <div>
                    {
                        Object.keys(companyProfileInfo)
                            .map((info, index) => {
                                return <div key={index}>{info.toUpperCase()} : {companyProfileInfo[info]}</div>
                            })
                    }
                </div>
            </div>
        );
    }
}

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component and 
 * the output of this code is displayed on the browser
 */
const Usage = (props) => {
    return <CompanyProfile stockTicker={'AMZN'} />
}

export default Usage;