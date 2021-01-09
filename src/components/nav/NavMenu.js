import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from '../../constants/routes';

export default class NavMenu extends Component {

    render(){
        const { toggleMenu } = this.props;
        
        return(
            <NavContainer id="menu" className="inactive">
                <div>
                    <NavLink activeClassName="nav-active" to={routes.HOME} onClick={() => {toggleMenu()}}>HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.PORT} onClick={() => {toggleMenu()}}>PORTFOLIO</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO} onClick={() => {toggleMenu()}}>ABOUT</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.CONT} onClick={() => {toggleMenu()}}>CONTACT</NavLink>
                </div>
            </NavContainer>
        );
    };
};

const NavContainer = styled.div`
    text-align: center;
    font-size: 20px;
    right: 0;
    z-index: 111;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #312D02;
    color: #FFF;
    position: fixed;
    a {
        text-decoration: none;
        display: block;
        height: 44px;
        padding-top: 20px;
        color: #45A788;
    }
    a:hover {
        color: #FCFF6C;
    }
    div {
        padding-top: 140px;
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
`;