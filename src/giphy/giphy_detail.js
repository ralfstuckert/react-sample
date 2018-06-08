import React from 'react'
import './giphy.css'

export const GiphyDetail = ({ giphy }) => {
    if (!giphy) {
        return null;
    }

    const giphyUrl = giphy.embed_url;
    const downloadUrl = giphy.images.original.url;
    const fileName = `${giphy.slug}.gif`;


    return (
        <div className="giphy-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={giphyUrl} title={fileName} />
            </div>
            <div className="details text-center">
                <a download={fileName}
                    href={downloadUrl}
                    title={fileName}
                    className="btn btn-primary"
                    role="button">
                    Download from Giphy</a>
            </div>
        </div>
    );
};

export default GiphyDetail;