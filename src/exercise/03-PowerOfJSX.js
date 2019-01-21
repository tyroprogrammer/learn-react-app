import React from 'react';

/**
 *🏆
 * The goal here is to get you more familiar with JSX.
 * You will use javascript code inside JSX to loop through object keys
 * and render a div element for each element in that object
 */
function CompanyProfile(props) {
    /**
     * 💡 some variables to store mock data
     * We will use these data to display the company profile information
     */
    const stockTicker = 'APPL';
    const companyProfileInfo = {
        'Company Name': 'Apple Inc.',
        'Price': 150,
        'Exchange': "Nasdaq Global Select",
        'Industry': "Computer Hardware",
        'CEO': 'Timothy D. Cook'
    }

    return (
        <div>
            <div>Profile of: {/**✏️ display stock ticker here*/}</div>
            <hr/>
            <div>
                {
                    /**
                     * ✏️ 
                     * This block is surrounded by curly braces {} so 
                     * we can really execute any Javascript stuff here.
                     * 
                     * Loop through the keys of companyProfileInfo
                     * object to render one div per key/value pair. The div should
                     * render key followed by a colon followed by value.
                     * 
                     * 🧭 Object.keys(obj) can be used to loop through the object
                     * eg: 
                     *      const obj = { 'key1': 'value1', 'key2': 'value2'};
                     *      Object.keys(obj) will return ['key1', 'key2']
                     * 🧭 You can use Array.map() to map any key to a div element
                     * eg:
                     *      ['a', 'b', 'c'].map(d => <div>{d}</div>)
                     * 🧭 Remember to use curly braces inside the div to render
                     * any text content you want
                     */
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
    return <CompanyProfile />
}

export default Usage;
