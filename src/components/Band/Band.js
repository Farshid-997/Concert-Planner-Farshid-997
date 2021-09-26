import React from 'react';
import Cards from '../card/Cards';

import './Band.css';

const Band = (props) => {
    const { name, category, image, bestAlbum, totalAlbumSell, price } = props.band;
    return (
        <div className="band">
            <div>
                <Cards name={name} image={image} category={category} totalAlbumSell={totalAlbumSell} bestAlbum={bestAlbum} price={price}></Cards>
            </div>
        </div>
    );
};

export default Band;