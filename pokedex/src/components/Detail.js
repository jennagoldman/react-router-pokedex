import React, { Component } from 'react';
import { getPokemon } from '../api.js';

export default class Detail extends Component {
    state = {
        pokemon: {}
    }

    async componentDidMount() {
        const data = await getPokemon(this.props.match.params.name);

        if (data.body.results) {
            this.setState({
                pokemon: data.body.results[0]
            })
        }
    }

    render() {
        const { pokemon } = this.state;
        console.log(pokemon)
        return (
            <div className="pokemon-detail">
                <h2>{pokemon.pokemon}</h2>
                <img src={pokemon.url_image} alt={pokemon.pokemon} />
                <p>HP: {pokemon.hp}</p>
                <p><span>Attack: {pokemon.attack}</span> | <span>Defense: {pokemon.defense}</span></p>
                <p>Types: {pokemon.type_1}, {pokemon.type_2}</p>
            </div>
        )
    }
}