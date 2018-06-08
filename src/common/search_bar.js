import React, { Component } from 'react';
import './search_bar.css'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input value= {this.state.term} onChange={ event => this.onInputChange(event.target.value) }
                        type="search" placeholder="enter search term" />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term: term });
        this.props.onSearchTermChange(term);
    }
}