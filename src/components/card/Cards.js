import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cards = (props) => {
    return (
        <div className="cards" >
            <Card style={{ width: '18rem', color: 'black', backgroundColor: '#96b1ce', margin: '10px', padding: "5px", borderRadius: '10px', maxHeight: '700px' }}>
                <Card.Img variant="top" src={props.image} style={{ width: '250px', height: '250px', margin: '5px', padding: '5px', borderRadius: '10px' }} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <p>Category:{props.category}</p>
                        <p>Best album:{props.bestAlbum}</p>
                        <p>Total Album sell:{props.totalAlbumSell} Million</p>
                        <p>Price:{props.price} Million</p>

                    </Card.Text>
                    <Button variant="primary">Add</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;