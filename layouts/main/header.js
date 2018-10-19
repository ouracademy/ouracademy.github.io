import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Router from 'next/router'

export default ({ absolute }) => (
  <Navbar
    collapseOnSelect
    fluid
    className={`navbar-custom ${absolute ? 'absolute' : ''}`}
  >
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/" onClick={() => Router.push('/')}>
          Ouracademy
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/" onClick={() => Router.push('/')}>
          Inicio
        </NavItem>
        <NavItem
          eventKey={2}
          href="/about"
          onClick={() => Router.push('/about')}
        >
          Nosotros
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
