import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'
import './Navbar.css'

function NavBar() {
    return (
        <>


            <Container fluid style={{ margin: "0", padding: "0" }}>

                <Navbar bg="primary" variant="dark" >

                    <Navbar.Brand href="#home"><b>ZOMATO</b></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/hotel-list"><span style={{ color: "black" }}><b>Hotel List</b></span></Link></Nav.Link>
                        <Nav.Link ><Link to="/hotel-registration"><span style={{ color: "black" }}><b>Hotel Registration</b></span></Link></Nav.Link>
                        <Nav.Link ><Link to="/list-menu"><span style={{ color: "black" }}><b>Menu List</b></span></Link></Nav.Link>
                        <Nav.Link ><Link to="/menu-registration"><span style={{ color: "black" }}><b>Menu Item</b></span></Link></Nav.Link>
                    </Nav>

                </Navbar>
            </Container>
        </>
    )
}

export default NavBar;

