import "./Header.css";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="nav-bar">
            <Navbar expand="lg">
                <Container>
                    <Link className="link" to="/">
                        <h1 className="logo-text">Food<span>DX</span> </h1>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/home">
                            Home
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/reviews">
                            Reviews
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/dashboard">
                            Dashboard
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/blogs">
                            Blogs
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/about">
                            About
                        </NavLink>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;