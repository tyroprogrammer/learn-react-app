import React from 'react';

/**
 * 🏆
 * We are trying to make `CompanyProfile` component reusable
 * Unlike previous exercise where we had `stockTicker` and `companyProfileInfo`
 * hard-coded inside this component itself, we are now getting it as a props
 */
function CompanyProfile(props) {
    /**
     * Where do we get stockTicker and companyProfileInfo from?
     * Well we get it as "props". The user of this component will
     * pass the value for these two variables.
     */
    const stockTicker = props.stockTicker; //✏️ Instead of empty string we want to get this value from props
    const companyProfileInfo = props.companyProfileInfo; //✏️ Instead of empty object we want to get this value from props
    return (
        <div>
            <div>Profile of: {stockTicker}</div>
            <hr />
            <div>
                {
                    Object.keys(companyProfileInfo)
                        .map((info, index) => {
                            return <div key={index}>{info} : {companyProfileInfo[info]}</div>
                        })
                }
            </div>
        </div>
    );
}

function FBCompanyProfile() {
    /**
     * We need to pass these data to the `CompanyProfile` component
     * as the props
     */
    const stockTicker = 'FB';
    const companyProfileInfo = {
        'Company Name': 'Facebook',
        'Price': 150,
        'Exchange': "Nasdaq Global Select",
        'Industry': "Computer Software",
        'CEO': 'Mark Zuckerberg'
    }
    /**
     * ✏️ need to pass the props to the `CompanyProfile` component
     * we need to pass `stockTicker` and `companyProfileInfo`
     * */
    return (
        <CompanyProfile stockTicker={stockTicker} companyProfileInfo={companyProfileInfo}/>
    )
}

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component and 
 * the output of this code is displayed on the browser
 */
const Usage = (props) => {
    return <FBCompanyProfile />
}

export default Usage;
