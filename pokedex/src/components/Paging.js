import React, { Component } from 'react';
import request from 'superagent';

export default class Paging extends Component {
    state = {
        page: 1
    }

    async componentDidMount() {
        if (this.props.match.params.search) {
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.props.match.params.search}`)
        
            this.setState({totalResults: data.body.count});
        }
    }

    render() {
        const totalResults = this.props.data.count;
        console.log(this.props.data.count)
        return (
            <div id="paging-container">
            <button id="previous">
                Prev
            </button>
            <span id="paging-span">Page {this.state.page} of {totalResults}</span>
            <button id="next">
                Next
            </button>
        </div>
        )
    }
}