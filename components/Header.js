import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import Image from 'next/image'
import logo from '../public/shipper-logo.png'
import blankPicture from '../public/blank-profile-picture.png'

function Header() {
  return (
    <div>
      <Navbar
        className="navbar-background"
        expand="md"
        fixed="top"
        light
      >
        <NavbarBrand href="/">
          <Image
            src={logo}
            alt="Shipper Logo" 
            width={141}
            height={30}
          />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Nav
            className="ms-auto"
            navbar
          >
            <NavItem>
              <div className="d-inline-block me-2">
                Hello, <span className="shipper-color">Shipper User</span>
              </div>
              <div className="navbar-profile-picture d-inline-block align-middle">
                <Image
                  src={blankPicture}
                  alt="User Picture" 
                  width={30}
                  height={30}
                />
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
