import React, { Component } from 'react';
import style from './style';

class Search extends Component {
    render() {
        const { searchValue, onSearch, onInputChange } = this.props;
        return (
            <div style={style.searchContainer}>
                <input style={style.searchInput} onChange={onInputChange} value={searchValue} placeholder={'Select a stock'}/>
                <button onClick={onSearch}>Search</button>
            </div>
        );
    }
}

export default Search;