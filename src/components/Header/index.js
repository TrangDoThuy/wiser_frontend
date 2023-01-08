/**
 *
 * Header
 *
 */

import React, { useState } from 'react';

import { Collapse, Navbar, Nav, NavItem } from 'reactstrap';

import StyledHeader from './StyledHeader';

import classes from './index.module.css';
import Link from '../Link';
import AuthContext from '../../context/auth-context';

import WiserLogo from '../../assets/img/wiser_logo_2.jpg';
import FinMonsterLogo from '../../assets/img/FinMonster-Logo.png';

function Header() {
  const [isOpen, toggleIsOpen] = useState(false);

  const toggleCollapse = () => {
    if (window.innerWidth < 768) {
      toggleIsOpen(!isOpen);
    }
  };

  const mainPath = '/';
  const aboutUsPath = '/about-us';
  const homePath = '/home';
  const contactUsPath = '/contact-us';
  const investmentPath = '/investment-form';
  const loginPath = '/login';
  const signUpPath = '/sign-up';

  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <StyledHeader>
            <Navbar expand="md">
              <div className="container">
                <div className="navbar-brand">
                  <div className={classes.logo}>
                    <img
                      id={classes.hua_liang_logo}
                      src={WiserLogo}
                      alt="Wiser logo"
                    />
                  </div>
                </div>
                <Collapse isOpen={isOpen} navbar>
                  <Nav navbar>
                    <NavItem onClick={toggleCollapse}>
                      <Link
                        url={homePath}
                        active={window.location.pathname === '/home'}
                      >
                        <span title="home">Home</span>
                      </Link>
                    </NavItem>

                    <NavItem onClick={toggleCollapse}>
                      <Link
                        url={mainPath}
                        active={window.location.pathname === '/'}
                      >
                        <span title="projects">Companies</span>
                      </Link>
                    </NavItem>
                    {/* <NavItem onClick={toggleCollapse}>
                      <Link
                        url={contactUsPath}
                        active={window.location.pathname === 'contact-us'}
                      >
                        <span title="contact_us">News</span>
                      </Link>
                    </NavItem> */}

                    {/* <NavItem onClick={toggleCollapse}>
                      <Link
                        url={aboutUsPath}
                        active={window.location.pathname === '/about-us'}
                      >
                        <span title="about_us">About Us</span>
                      </Link>
                    </NavItem> */}
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
          </StyledHeader>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Header;
