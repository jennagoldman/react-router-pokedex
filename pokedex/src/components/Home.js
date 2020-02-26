import React, { Component } from 'react';
import request from 'superagent';
import SearchBar from './SearchBar';
import List from './List';

export default class Home extends Component {
    state = {
        searchQuery: this.props.match.params.search,
        pokemons: [],
        totalResults: 0,
        typeInput: ''
    }

    async componentDidMount() {
        if (this.props.match.params.search) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.search}`)
        
            this.setState({
                pokemons: data.body.results,
                totalResults: data.body.count
            });
        } else if (!this.props.match.params.search) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=&perPage=50`)
        
            this.setState({
                pokemons: data.body.results,
                totalResults: data.body.count
            });
        }
    }

    // clear form when returning to home from current
    async componentWillUpdate(nextProps) {
        const param = this.props.match.params.search;
        let nextParam = nextProps.match.params.search;
        if (param !== nextParam && !nextParam) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?`)
            this.setState({ 
               pokemons: data.body.results,
               searchQuery: '',
               totalResults: data.body.count
            })         
        }
    }
    

    handleSearch = async (event) => {
        event.preventDefault();
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
        
        this.setState({ 
            pokemons: data.body.results,
            totalResults: data.body.count 
        });

        this.props.history.push(this.state.searchQuery);
    }

    handleChange = (event) => this.setState({ searchQuery: event.target.value });

    render() {
        console.log(this.state.pokemons);
        return (
            <main>
                
                <SearchBar 
                    searchQuery={this.state.searchQuery} 
                    handleSearch={this.handleSearch} 
                    handleChange={this.handleChange}
                />
                <List data={this.state.pokemons} />
            </main>
        )
    }
}