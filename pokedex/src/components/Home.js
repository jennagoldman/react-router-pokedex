import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import List from './List';

export default class Home extends Component {
    render() {
        return (
            <main>
                <SearchBar />
                <h2>Pokemon will appear here!</h2>
                <List />
            </main>
        )
    }
}