import React from 'react';
import { Button } from 'react-bootstrap';

const Teacher = (props) => {
    const { picture, age, name, type } = props.teacher;
    return (
        <div className="d-flex p-3 shadow-sm ">
            <img src={picture} alt="" className="p-3" />
            <div className=" p-3">
                <h3 className="text-left">{name}</h3>
                <h6>{age} years old</h6>
                <p>{type}</p>
                <Button variant="danger">View More</Button>
            </div>
        </div>
    );
};

export default Teacher;