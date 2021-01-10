import React       from 'react';
import styled      from 'styled-components';

import NavBar from './NavBar';

const NavHamburger = ({ toggleMenu, pageStyle }) => {
  return(<>
    <Logo src="ALMA.png" style={{display: pageStyle.displayLogo, filter: pageStyle.logoColor}}/>
    <Title>ALMA CARDENAS</Title>
    <NavBar/>
    <Hamburger name="toggleMenu" onClick={(e) => toggleMenu(e)}>
      <section style={{backgroundColor: pageStyle.color}}/>
      <section style={{backgroundColor: pageStyle.color}}/>
      <section style={{backgroundColor: pageStyle.color}}/>
    </Hamburger>
  </>);
};

const Logo = styled.img`
  position: absolute;
  z-index:999;
  right:0;

  width: 36px;
  margin: 5vw;
`;
const Title = styled.h1`
  position: absolute;
  z-index:991;
  width: 100vw!important;
  text-align:center;
  color: FCFF6C;
  text-transform: uppercase;
  width: 36px;
  margin: 5vw auto!important;
  font-size: 36px
`;
const Hamburger = styled.div`
  display: none;
  position: absolute;
  z-index: 999;
  right: 0;

  margin: 5vw;

  section {
    margin: 6px 0;
    width: 35px;
    height: 4px;
  }
  @media screen and (max-width: 540zpx) {
    display: inline-block;
  }
`;

export default NavHamburger;