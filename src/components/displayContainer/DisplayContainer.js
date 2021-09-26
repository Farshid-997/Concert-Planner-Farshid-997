import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import './DisplayContainer.css'
const DisplayContainer = () => {
    const [displayBand, setBand] = useState([])
    useEffect(() => {
        fetch('./infos.JSON')
            .then(res => res.json())
            .then(data => setBand(data))

    }, [])
    return (
        <div>
            <div className="total-container">
                <div className="showBand">
                    {
                        displayBand.map(band => <Band
                            key={band.key}
                            band={band}

                        >
                        </Band>)
                    }
                </div>

                <div className="showInfo">
                    <h2>Total value show</h2>
                </div>
            </div>
        </div>
    );
};

export default DisplayContainer;