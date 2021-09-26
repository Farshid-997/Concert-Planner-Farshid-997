import React from 'react';
import NameShow from '../NameShow/NameShow';
import './TotalValue.css'
const TotalValue = (props) => {
    let total = 0;
    const { items } = props
    for (const item of items) {
        total = total + item.price
    }
    return (
        <div className="totals">
            <h3> Total Count:{props.items.length}</h3>
            <h4>Total Cost:{total}</h4>
            {
                items.map((element) => <NameShow nameshow={element.name}></NameShow>)
            }
        </div>
    );
};

export default TotalValue;