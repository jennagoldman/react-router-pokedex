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
            <div className="item-detail">
                <h2>{pokemon.pokemon}</h2>
                <img src={pokemon.url_image} alt={pokemon.pokemon} />
                <div id="stats">
                    <p><span className="hp-span">{pokemon.hp}</span> HP</p>
                    <p><span><i class="fas fa-bolt"></i> {pokemon.attack}</span> | <span><i class="fas fa-shield-alt"></i> {pokemon.defense}</span></p>
                    <p>Types: {pokemon.type_1}, {pokemon.type_2}</p>
                </div>
            </div>
        )
    }
}