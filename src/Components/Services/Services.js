import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './service.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/ServiceApi.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="services-banner">
                <h1 >Services</h1>
            </div>
            {/*  bootstrap grid */}
            <Row xs={1} md={3} className="g-5 container my-5 mx-auto">
                {Array.from({ length: 1 }).map((_, idx) => (
                    /* show single services */
                    services.map(s => <Service service={s}></Service>)
                ))}</Row>

        </div >
    );
};

export default Services;