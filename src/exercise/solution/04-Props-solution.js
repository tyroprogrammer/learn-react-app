import React from 'react';

function StockProfile(props) {

    const stockTicker = props.stockTicker;
    const companyProfileInfo = props.companyProfileInfo;
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

function FBStockProfile() {
    const stockTicker = 'FB';
    const companyProfileInfo = {
        'Company Name': 'Facebook',
        'Price': 150,
        'Exchange': "Nasdaq Global Select",
        'Industry': "Computer Software",
        'CEO': 'Mark Zuckerberg'
    }

    return (
        <StockProfile stockTicker={stockTicker} companyProfileInfo={companyProfileInfo}/>
    )
}

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component and 
 * the output of this code is displayed on the browser
 */
const Usage = (props) => {
    return <FBStockProfile />
}

export default Usage;
