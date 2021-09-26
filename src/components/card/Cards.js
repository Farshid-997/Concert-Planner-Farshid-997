import React from 'react';
import { Button, Card } from 'react-bootstrap';
import TotalValue from '../TotalValue/TotalValue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBeer } from 'react-icons/fa';

const Cards = (props) => {
    const { name, category, image, bestAlbum, totalAlbumSell, price } = props.band;
    //  const element = BsMusicNoteList
    return (
        <div className="cards" >
            <Card style={{ width: '18rem', color: 'black', backgroundColor: '#96b1ce', margin: '10px', padding: "5px", borderRadius: '10px', maxHeight: '700px' }}>
                <Card.Img variant="top" src={image} style={{ width: '250px', height: '250px', margin: '5px', padding: '5px', borderRadius: '10px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                        <p>Category:{category}</p>
                        <p>Best album:{bestAlbum}</p>
                        <p>Total Album sell:{totalAlbumSell} Million</p>
                        <p>Price:{price} Million</p>

                    </Card.Text>
                    <Button onClick={() => props.addToInfo(props.band)} variant="primary"> <FaBeer />? ADD!!</Button>
                </Card.Body>
            </Card>
            {/* <TotalValue name={name}></TotalValue> */}

        </div>
    );
};

export default Cards;