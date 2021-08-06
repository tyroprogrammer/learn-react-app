import React, { Component } from 'react';
import DataAPI from '../api/DataApi';

/**
 *🏆
 * This component is similar to what we looked at for the exercise of `Understanding Props`
 * section (./04-Props.js) but there are some differences.
 *  We expect the user of this component to pass `stockTicker` as props.
 * But one difference here compared to earlier exercise is that we are not expecting `companyProfileInfo`
 * to be passed as props. Instead we have an API that we would like to use to
 * fetch the data from. It has a method called `getCompanyProfile(ticker)`
 * that will return you `companyProfile` for given ticker.
 * The goal is to help you understand some use cases where we might want to use
 * some of the React lifecycle methods
 */
class CompanyProfile extends Component {
    constructor(props) {
        super(props);
        /**
         * We have initialized the state with companyProfileInformation
         */
        this.state = {
            companyProfileInfo: {}
        }
    }

    /**
     * ✏️ 
     * We need to use componentDidMount lifecycle method to fetch company profile
     * information for given stock ticker using the DataAPI provided
     * 🧭  Add lifecycle method called componentDidMount
     * 🧭  Inside that method you need to use the DataAPI that's already imported.
     *     Make a call to `getCompanyProfile()` method and pass the `stockTicker` from the props.
     *     This method will return a promise that resolves into `companyProfile` info
     * 🧭  Using the data from the promise use `setState` to set companyProfileInfo
     *    like - `this.setState({ companyProfileInfo: data })`
     * 🧭  What if the promise resolves into an error? You might want to catch the error
     *     and do something with it (Remember .catch in Promise). For example below I'm
     *     catching an error and just logging it in console. You can do the same for the
     *     sake of this exercise:
     *          Api.getData()
     *             .then(data => doSth(data))
     *             .catch(error => console.log(error))
     * */
    componentDidMount() {
        DataAPI.getCompanyProfile(this.props.stockTicker)
         .then(data => {
            this.setState({
                companyProfileInfo: data
            })
         })
         .catch(error => {
             console.log(error);
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
    return <CompanyProfile stockTicker={'AMZ'} />
}

export default Usage;