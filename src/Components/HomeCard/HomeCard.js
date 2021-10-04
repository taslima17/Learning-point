import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeCard = (props) => {
    const { image, name } = props.service;
    return (
        <Col >
            <Card
            >
                <Card.Header>
                    <img className="image-fluid" src={image} alt="" height="200px" width="250px" />
                </Card.Header>
                <Card.Body>
                    <Card.Title > {name} </Card.Title>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeCard;