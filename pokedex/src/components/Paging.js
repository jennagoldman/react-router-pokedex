import React, { Component } from 'react';

export default class Paging extends Component {
    render() {
        const perPage = 20;
        const { totalResults } = this.props;
        const lastPage = Math.ceil(totalResults / perPage);
        return (
            <div id="paging-container">
                <button 
                    id="previous" 
                    onClick={event => this.props.handlePageChange(-1)} 
                    disabled={this.props.page === 1}
                >
                    Prev
                </button>
                <span id="paging-span">Page {this.props.page} of {this.props.maxPage}</span>
                <button 
                    id="next" 
                    onClick={event => this.props.handlePageChange(1)} 
                    disabled={this.props.page === this.props.maxPage}
                >
                    Next
                </button>
        </div>
        )
    }
}