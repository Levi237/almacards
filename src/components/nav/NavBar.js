import React, { Component } from 'react'
import { NavLink }          from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from '../../constants/routes';

export default class NavBar extends Component {

    render(){
        const { toggleMenu } = this.props;
        
        return(
            <LocalWrapper id="bar" className="active">
                <div>
                    {/* <NavLink activeClassName="nav-active" to={routes.HOME} onClick={() => {toggleMenu()}}>HOME</NavLink> */}
                    <NavLink activeClassName="navbar-active" to={routes.PORT} onClick={() => {toggleMenu()}}>PORTFOLIO</NavLink>
                    <NavLink activeClassName="navbar-active" to={routes.INFO} onClick={() => {toggleMenu()}}>ABOUT</NavLink>
                    <NavLink activeClassName="navbar-active" to={routes.CONT} onClick={() => {toggleMenu()}}>CONTACT</NavLink>
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
        padding-top: 100px;
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
`;