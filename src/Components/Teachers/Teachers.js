import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('/Teachers.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data));

    }, [])
    return (
        <div>
            <div className="teacher-banner">
                <h1>Our Teams</h1>
            </div>
            {/* bootstrap grid */}
            <Row xs={1} md={2} className="g-5 mx-auto container my-5">
                {Array.from({ length: 1 }).map((_, idx) => (
                    /* show single teacher component */
                    teachers.map(t => <Teacher teacher={t}></Teacher>)

                ))}
            </Row></div>
    );
};

export default Teachers;