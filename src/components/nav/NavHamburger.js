import React       from 'react';
import styled      from 'styled-components';

const NavHamburger = ({ toggleMenu, pageStyle }) => {
  return(<>
    <Logo src="../logo.png" style={{display: pageStyle.displayLogo, filter: pageStyle.logoColor}}/>
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
  left:0;

  width: 36px;
  margin: 5vw 0 0 5vw;
`;
const Title = styled.h1`
  position: absolute;
  z-index:991;
width: 100vw!important;
text-align:center;
  color: white;
text-transform: uppercase;
  width: 36px;
  margin: 60px auto!important;
`;
const Hamburger = styled.div`
  position: absolute;
  z-index: 999;
  right: 0;

  margin: 5vw 5vw 0 0;

  section {
    margin: 6px 0;
    width: 35px;
    height: 4px;
  }
  @media screen and (max-width: 945px) {
  }
`;

export default NavHamburger;