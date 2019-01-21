import React, { Component } from 'react';
import style from './solution/style';

/**
 * 🏆
 * This component houses the input and the Search button.
 * When the user types in something we handle the change event and
 * store the values typed in the input field to the state
 * When user clicks the Search button it will invoke a callback function 
 * that was passed to this component as a props with the latest input value
 * as an argument
 */
class Search extends Component {
    constructor(props) {
        super(props);
        /**
         * Initialized state here with default empty string
         */
        this.state = {
            stockTicker: ''
        }

        /**
         * Functions are already bound here for you.
         */
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleInputChange(e) {
        /**
         * ✏️ 
         * You need to get the value typed on the input and use that to update
         * the `stockTicker` state
         *🧭 You can get the value of the input using the SyntheticEvent passed
         *  to this function as argument. e.target.value here will give you that value
         *🧭 Set this value to the state `stockTicker`
         */
    }

    handleSearch() {
        /**
         * ✏️ 
         * You need to invoke the `handleSearch` props passed by the parent
         * Pass the latest `stateTicker` state when you invoke that function
         * this.props.handleSearch(this.state.stockTicker)
         */
    }

    render() {
        const { stockTicker } = this.state;
        return (
            <div style={style.searchContainer}>
                <input style={style.searchInput} onChange={this.handleInputChange} value={stockTicker} placeholder={'Select a stock'} />
                <button onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
}

export default Search;