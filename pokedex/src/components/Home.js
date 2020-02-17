import React, { Component } from 'react';
import request from 'superagent';
import SearchBar from './SearchBar';
import List from './List';

export default class Home extends Component {
    state = {
        searchQuery: this.props.match.params.search,
        pokemons: []
    }

    async componentDidMount() {
        if (this.props.match.params.search) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.props.match.params.search}`)
        
            this.setState({pokemons: data.body.results});
        }
    }
    

    handleSearch = async (event) => {
        event.preventDefault();
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
        
        this.setState({ pokemons: data.body.results });

        this.props.history.push(this.state.searchQuery);
    }

    handleChange = (event) => this.setState({ searchQuery: event.target.value });

    render() {
        return (
            <main>
                <SearchBar searchQuery={this.state.searchQuery} handleSearch={this.handleSearch} handleChange={this.handleChange} />
                <List data={this.state.pokemons} />
            </main>
        )
    }
}