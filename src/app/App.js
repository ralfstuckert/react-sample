import React, { Component } from 'react';
import {Alert, Loading} from '../common/funcomp';
import SearchBar from '../common/search_bar';
import {giphySearch} from '../giphy/giphy_api'
import {GiphyDetail} from '../giphy/giphy_detail'
import {GiphyList} from '../giphy/giphy_list'
import _ from 'lodash';
import "./App.css"

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            giphies: [],
            selectedGiphy: null,
            errorMessage: null,
            loading: false
        };
    }

    render() {
        return (
            <div className="container" >
                <h1 className="text-center">Giphy Search</h1>
                <SearchBar onSearchTermChange={_.debounce(this.startSearch.bind(this), 300)} />
                <Alert message={this.state.errorMessage}/>
                <Loading isLoading={this.state.loading}/>
                <GiphyDetail giphy={this.state.selectedGiphy} />
                <GiphyList giphies={this.state.giphies}
                           onGiphySelect={this.selectGiphy.bind(this)} />
            </div>
        )
    }

    selectGiphy(selectedGiphy) {
        this.setState({ selectedGiphy })
    }


    startSearch(term) {
        this.setState({
            loading: true,
            errorMessage: null
        });

        giphySearch(term).then( result => {
            this.setState({
                selectedGiphy: result[0],
                giphies: result,
                loading: false
            })
        }).catch(  error => {
            this.setState({
                errorMessage: error.message,
                loading: false
            })
        });
    }



}
