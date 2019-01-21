import React, { Component } from 'react';
import style from './style';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockTicker: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleInputChange(e) {
        this.setState({
            stockTicker: e.target.value
        })
    }

    handleSearch() {
        this.props.onSearch(this.state.stockTicker);
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