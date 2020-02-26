import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="item-detail">
                <h2>About Us</h2>
                <p>Don't have your own personal Pokedex? 
                <br /> <br />
                No worries! Catch 'Em All! is your one-stop resource of all Pokemon info and stats.</p>
                <img src="../pokedex.gif" alt="pokedex with error" />
            </div>
        )
    }
}