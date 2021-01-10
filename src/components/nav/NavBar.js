import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from '../../constants/routes';

export default class NavBar extends Component {

    render(){
        // const { toggleMenu } = this.props;
        
        return(
            <LocalWrapper id="bar">
                <Title>ALMA CARDENAS</Title>
                <div>
                    {/* <NavLink activeClassName="nav-active" to={routes.HOME} onClick={() => {toggleMenu()}}>HOME</NavLink> */}
                    <NavLink activeClassName="navbar-active" to={routes.PORT}>PORTFOLIO</NavLink>
                    <NavLink activeClassName="navbar-active" to={routes.INFO}>ABOUT</NavLink>
                    <NavLink activeClassName="navbar-active" to={routes.CONT}>CONTACT</NavLink>
                </div>
            </LocalWrapper>
        );
    };
};

const LocalWrapper = styled.div`
    text-align: right;
    font-size: 15px;
    right: 0;
    z-index: 111;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #FFF;
    position: fixed;
    a {
        letter-spacing: 1px;
        color: #312D02;
        &:nth-of-type(2){
            margin: 0 2vw;
        }
    }
    a:hover {
        color: #FCFF6C;
    }
    div {
        padding-top: 80px;
        padding-right: 5vw;
    }
    button {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px;
        color: #FFF;
        border: none;
        font-size: 14px;
    }
    @media screen and (max-width: 540px) {
        text-align: center;
        div {
            padding-top: 20vw;
            padding-right: 0;
        }
    }
`;
const Title = styled.h1`
  position: absolute;
  z-index:991;
  width: 100vw!important;
  text-align:center;
  color: #312D02;
  text-transform: uppercase;
  margin: 40px auto!important;
  font-size: 36px;
  @media screen and (max-width: 540px) {
    margin: 5vw auto!important;
    font-size: 10vw;
  }
`;