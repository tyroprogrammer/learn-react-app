import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import DataAPI from '../api/DataApi';
import style from './solution/style';

const ERROR_MSG = `Error when fetching company profile data. Please check if you entered valid stock ticker`;

/**
 * 🏆
 * This component is responsible for displaying the Compnay Profile of the stock ticker
 * provided to it as a `props` by it's parent.
 * Here we will see how to fetch data using some lifecycle methods and also potential
 * way to handle an error if it were to arise. We will conditionally render different
 * things based on some state values.
 */
class CompanyProfile extends Component {
    constructor(props) {
        super(props);
        /**
         * 💡 
         * Initialized the state with empty values
         */
        this.state = {
            companyProfile: {},
            errorMsg: ''
        }

        /**
         * 💡 
         * These functions are already bound for you with `this`
         */
        this.updateCompanyProfile = this.updateCompanyProfile.bind(this);
        this.updateErrorMsg = this.updateErrorMsg.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    /**
     * 💡 
     * This is a lifecycle method. React will invoke this lifecyle method
     * after the component is mounted to the DOM for the first time
     */
    componentDidMount() {
        /**
         * ✏️ 
         * You need to fetch the profile data here.
         * There's a fetchCompanyProfile function already defined below
         * that will fetch the data from the given API
         * You just need to invoke it here
         */
        this.fetchCompanyProfile();
    }

    /**
    * 💡 
    * This is another lifecycle method. React will invoke this lifecyle method
    * after the component is updated. Remember the component will be updated
    * every time either the props changes or the state changes for this component
    */
    componentDidUpdate(prevProps, prevState) {
        /**
         * ✏️ 
         * You need to call the fetchCompanyProfile method to fetch the
         * comanyProfile data when the parent passes you a different stockTicker
         * 🧭  Remember to check if the stockTicker props changed before calling the
         *     fetchCompanyProfile method though. You DON'T want to fetch the data
         *     if the stockTicker hasn't changed. If you don't check whether props
         *     changed your component will go in an infinite loop - it will be
         *     fetching the same data over and over again.
         * This lifecycle method will be given multiple arguments.
         * First argument is the value of props before this component updated
         * Second argument is the value of the state before this component updated
         * In our case we just want to check props to see if value for stockTicker
         * changed and the way to do this is:
         *  if (this.props.stockTicker !== prevProps.stockTicker) {
         *     //Fetch data here only if the current props is not same as previous props
         *  }
         */
         if (this.props.stockTicker !== prevProps.stockTicker) {
            this.fetchCompanyProfile();
        }
    }

    /**
     * 💡 
     * This is a method to fetch the company profile data from the API.
     * Couple things to note here:
     * 1. We are updating the errorMsg state to empty string. This is jus to
     *    reset any error message we might have from previous search
     * 2. We invoke the API only when the stockTicker is truthy. No point in
     *    calling the API if we don't have any value for stockTicker
     * 3. We use the data received from the API to update companyProfile state
     *    (look below for updateCompanyProfile function implementation)
     * 4. We catch any Error we get from the API and call handleError method
     *    to handle the error.
     */
    fetchCompanyProfile() {
        const { stockTicker } = this.props;
        this.updateErrorMsg('');
        if (stockTicker) {
            DataAPI.getCompanyProfile(this.props.stockTicker)
                .then(this.updateCompanyProfile)
                .catch(this.handleError)
        }
    }

    /**
     * 💡
     * Updates the companyProfile state with the argument provided
     */
    updateCompanyProfile(companyProfile) {
        this.setState({ companyProfile });
    }

    /**
     * 💡
     * Updates the errorMsg state with the argument provided
     */
    updateErrorMsg(errorMsg) {
        this.setState({ errorMsg });
    }

    /**
     * 💡 
     * This is used to handle any error that we might get when we call the API
     * The API throws an error when for example the stockTicker provided
     * is not a valid stockTicker.
     */
    handleError(error) {
        //This sets the state `errorMsg` with the ERROR_MSG defined at the very top
        this.updateErrorMsg(ERROR_MSG);
        //Since there's an error we want to reset the `companyProfile` state
        //with empty object. We don't want to display stale data
        this.updateCompanyProfile({});
    }

    render() {
        const { companyProfile } = this.state;
        const { description, ...rest } = companyProfile;
        /**
         * ✏️ 
         * We want to render an error message if the API returns some error.
         * We want to check if we have `errorMsg` state is not empty and
         * if it's not render the message inside a div
         * 🧭 There's an `isEmpty` function that's already imported. Use that
         *  to check if the `errorMsg` state is empty
         *      Like: isEmpty(this.state.errorMsg)
         * 🧭  If it is empty assign null to ErrorMsg
         * 🧭  If the errorMsg is not empty assign <div>{this.state.errorMsg}</div>
         *     to the ErrorMsg constant.
         * You can either use ternery operator -
         *      const a = isEmpty(b) ? c : null;
         * OR you can use '&&' operator -
         *      const a = isEmpty(b) && c;
         * Either ways you are telling ErrorMsg to display the div with the
         * error message only when the `erroMsg` state is not empty
         */
        const ErrorMsg = (
            !isEmpty(this.state.errorMsg) &&
            <div>{this.state.errorMsg}</div>
        );

        /**
         * 💡 
         * Here we are doing same thing as the ErrorMsg above
         * Instead of checking for `errorMsg` we are checking for `companyProfile`
         * state. We are displaying the `div` only if the `companyProfile`
         * state is not empty.
         */

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