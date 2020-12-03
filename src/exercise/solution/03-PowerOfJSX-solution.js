import React from 'react';

function StockProfile(props) {
    const stockTicker = 'AAPL';
    const companyProfileInfo = {
        'Company Name': 'Apple Inc.',
        'Price': 150,
        'Exchange': "Nasdaq Global Select",
        'Industry': "Computer Hardware",
        'CEO': 'Timothy D. Cook'
    }

    return (
        <div>
            <div>Profile of: {stockTicker}</div>
            <hr/>
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

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component and 
 * the output of this code is displayed on the browser
 */
const Usage = (props) => {
    return <StockProfile />
}

export default Usage;
