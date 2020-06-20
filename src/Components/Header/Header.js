import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import   './Header.css'

const Header = () =>{
    return(
            <Navbar className="navbarContainer">
                <Navbar.Brand href="/" className='img'><img src={'./favicon.ico'} alt='web logo' className='img'/></Navbar.Brand>
                <Nav className="contents">
                    <Nav.Item className="navItems">
                        <Nav.Link href="/About" className="navLinkItems">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navItems">
                        <Nav.Link href="/Projects" className="navLinkItems">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Contact" className="navLinkItems">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
        </Navbar>
    )
}

export default Header;