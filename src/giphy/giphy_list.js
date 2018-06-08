import React from 'react';
import GiphyListItem from './giphy_list_item';
import './giphy.css'

export const GiphyList = (props) => {

    const giphyItems = props.giphies.map((giphy) => {
        return <GiphyListItem
                    onGiphySelect={props.onGiphySelect}
                    key = {giphy.id}
                    giphy = {giphy} />
    });

    return (
        <ul className="col-md-4 list-group">
            {giphyItems}
        </ul>
    );
};

export default GiphyList;