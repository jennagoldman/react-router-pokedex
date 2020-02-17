import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" name="search" placeholder="Enter Pokemon name" />
                <button>Search</button>
            </form>
        )
    }
}