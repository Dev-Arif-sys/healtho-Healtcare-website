import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user,logOut}=useAuth()
   console.log(user)
    return (
        <div>
              <Navbar className='navbar' fixed="top"  collapseOnSelect expand="lg"  bg="light" variant="light">
    <Container>
    <Navbar className="logo" href="#home">HEAL<span className="logo-portion">THO</span></Navbar>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto align-items-center">
    {  user?.displayName  }
      <Nav.Link as={Link} className='nav-menu' to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} className='nav-menu'  to='/doctors'>Doctors</Nav.Link>
      <Nav.Link as={Link} className='nav-menu' to="/about">About us</Nav.Link>
      {
        user? <Nav.Link><button onClick={logOut} className="signout-btn">Sign out</button></Nav.Link>:
        <Nav.Link as={Link} to="/signin"><button className="sign-btn">Sign in</button></Nav.Link>
      }

     
    </Nav>
        </Navbar.Collapse>

    
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;