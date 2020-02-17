import React, { Component } from 'react';
import Detail from './Detail';

export default class List extends Component {
    render() {
        return (
            <section className="pokemon-list">
                <ul>
                    <Detail />
                </ul>
            </section>
        )
    }
}