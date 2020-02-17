import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearch}>
                <input 
                name="search" 
                placeholder="Enter Pokemon name" 
                value={this.props.searchQuery || ''} 
                onChange={this.props.handleChange} 
                />
                <button>Search</button>
            </form>
        )
    }
}