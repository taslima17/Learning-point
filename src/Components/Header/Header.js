import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../R.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img
                        src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <h2 className="m-3  text-white fs-3 ">Learning Point</h2>
                    <Nav className="ms-auto">
                        <NavLink to="/Home" className=" m-3 text-decoration-none text-white fs-5  p-3 ">Home</NavLink>
                        <NavLink to="/about" className="m-3 text-decoration-none text-white fs-5 p-3 ">About</NavLink>
                        <NavLink to="/services" className="m-3 text-decoration-none text-white fs-5 p-3 ">Services</NavLink>
                        <NavLink to="/teachers" className="m-3 p-3 text-decoration-none text-white fs-5">Teachers</NavLink>
                        <NavLink to="/blog" className="m-3 p-3 text-decoration-none text-white fs-5">Blog</NavLink>
                    </Nav>
                </Container>
            </Navbar>


        </div>

    );
};

export default Header;