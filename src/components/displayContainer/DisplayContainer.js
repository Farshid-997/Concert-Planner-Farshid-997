import React, { useEffect, useState } from 'react';
//import Band from '../Band/Band';
import Cards from '../card/Cards';
import TotalValue from '../TotalValue/TotalValue';
import './DisplayContainer.css'
const DisplayContainer = () => {
    const [displayBand, setBand] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('./infos.JSON')
            .then(res => res.json())
            .then(data => setBand(data))

    }, [])

    const addToInfo = (band) => {
        const newItems = [...items, band]
        setItems(newItems)

    }
    return (
        <div>
            <div className="total-container">
                <div className="showBand">
                    {
                        displayBand.map(band => <Cards
                            key={band.key}
                            band={band}
                            addToInfo={addToInfo}

                        >
                        </Cards>

                        )

                    }
                </div>

                <div className="showInfo">

                    <TotalValue items={items}
                    >

                    </TotalValue>
                </div>
            </div>
        </div>
    );
};

export default DisplayContainer;