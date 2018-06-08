import React from 'react';
import './giphy.css'

const GiphyListItem = ({ giphy, onGiphySelect }) => {
    const imageUrl = giphy.images.fixed_height_small_still.url;
    const fileName = `${giphy.slug}.gif`;

    return (
        <li onClick={() => onGiphySelect(giphy)} className="list-group-item">
            <div className="giphy-list media">
                <div className="media-left">
                    <img className="media-object"
                        src={imageUrl}
                        title={fileName}
                        alt={fileName} />
                </div>
            </div>
        </li>
    );
};

export default GiphyListItem;