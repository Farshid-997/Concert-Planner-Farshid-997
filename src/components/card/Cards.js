import React from 'react';
import { Button, Card } from 'react-bootstrap';


import { FaHeadphones } from 'react-icons/fa';

const Cards = (props) => {
    const { name, category, image, bestAlbum, totalAlbumSell, price } = props.band;

    return (
        <div className="cards" >
            <Card style={{ width: '18rem', color: 'black', backgroundColor: '#96b1ce', margin: '10px', padding: "5px", borderRadius: '10px', maxHeight: '700px' }}>
                <Card.Img variant="top" src={image} style={{ width: '250px', height: '250px', margin: '5px', padding: '5px', borderRadius: '10px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div className="fw-bold">
                            <p>Category:{category}</p>
                            <p>Best album:{bestAlbum}</p>
                            <p>Total Album sell:{totalAlbumSell} Million</p>
                            <p>Price They Earn:{price} Million</p>
                        </div>


                    </Card.Text>
                    <Button onClick={() => props.addToInfo(props.band)} variant="primary"> <FaHeadphones className="icons" /> ADD!!</Button>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Cards;
