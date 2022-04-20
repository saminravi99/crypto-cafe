import "./Header.css";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {

    const {pathname} = useLocation();
    return (
        <div className={pathname === "/home" ? "d-block" :
        pathname === "/reviews" ? "d-block" :
        pathname === "/dashboard" ? "d-block" :
        pathname === "/blogs" ? "d-block" :
        pathname === "/about" ? "d-block" :
        pathname === "/" ? "d-block" :
        "d-none" 
         }>
            <div className="nav-bar">
            <Navbar className="nav-container" expand="lg">
                <Container>
                    <Link className="link" to="/">
                        <h1 className="logo-text">Food<span>DX</span> </h1>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/">
                            HOME
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/reviews">
                            REVIEWS
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/dashboard">
                            DASHBOARD
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/blogs">
                            BLOGS
                        </NavLink>
                        <NavLink className={({isActive}) => isActive ? `active-link mx-4 p-0` : `nav-link mx-4 p-0`} to="/about">
                            ABOUT US
                        </NavLink>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </div>
        
    );
};

export default Header;