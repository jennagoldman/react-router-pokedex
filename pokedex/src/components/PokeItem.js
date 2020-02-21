import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return (
            <li className="pokemon-list-item">
                <h2>{this.props.data.pokemon}</h2>
                <img src={this.props.data.url_image} alt={this.props.data.pokemon} />
            </li>
        )
    }

}