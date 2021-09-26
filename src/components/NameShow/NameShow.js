import React from 'react';
import './NameShow.css'
const NameShow = (props) => {
    return (
        <div className="nameshow">
            <h5>Name:{props.nameshow}</h5>
        </div>
    );
};

export default NameShow;