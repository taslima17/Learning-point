import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = (props) => {
    const history = useHistory()
    const { id, name, price, image } = props.service;
    const url = `/service/${id}`
    const handleService = () => {
        history.push(url);
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} height="300px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Button variant="danger" onClick={handleService}>Enroll Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;