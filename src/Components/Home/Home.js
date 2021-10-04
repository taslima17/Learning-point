import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import '../Header/Header.css'
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    const [service, setService] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('/ServiceApi.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const popularService = service.filter(s => s.id < 5);
    console.log(popularService);
    const handleService = () => {
        history.push('/service')

    }
    return (
        <div>
            <div className="Banner">
                <div className="title"><h1>Welcome <br /> to Learning Point</h1>
                    <p>Explore Our Courses and Enrich Your Knowledge</p></div>
            </div>
            <div className="service">
                <h1 className="my-5"> Our Popular Services</h1>
                <Row xs={1} md={4} className="g-4 container mx-auto">
                    {Array.from({ length: 1 }).map((_, idx) => (

                        popularService.map(s => <HomeCard service={s}></HomeCard>)

                    ))}
                </Row>
                <Button variant="dark my-5 p-3" onClick={handleService}>See More Services</Button>
            </div>
        </div>
    );
};

export default Home;