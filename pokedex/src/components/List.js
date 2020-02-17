import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokeItem from './PokeItem';

export default class List extends Component {
    render() {
        console.log(this.props.data);
        return (
            <section className="pokemon-list">
                <ul>
                    {this.props.data.map(pokemon => 
                        <Link to={`pokemons/${pokemon.pokemon}`} key={`link_${pokemon._id}`}>
                            <PokeItem data={pokemon} key={pokemon._id}/>
                        </Link>)
                    }
                </ul>
            </section>
        )
    }
}