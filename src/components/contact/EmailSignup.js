import React, { Component } from 'react';
import styled               from 'styled-components';

import EmailForm       from './EmailForm';

export default class EmailSignup extends Component { 
    
    render(){

        const { toggleEmailSignup } = this.props
        return(
            <Container id="email" className="inactive contact-container">
                <CloseBtn name="emailForm" className="close xClose white" onClick={(e) => {toggleEmailSignup(e)}}>X</CloseBtn>
                <EmailForm/>
            </Container>
        );
    };
};

const Container = styled.div`
height: 100vh;
width: 100vw;
    position: fixed;
    overflow: scroll;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 745px) {
        align-items: start;
        background-color: #fff;
    }
`;

const CloseBtn = styled.button`
    background-color: transparent;
    border-radius: 100px;

    font-size: 14px;
    max-height: 30px;
    max-width: 30px;
    min-height: 30px;
    min-width: 30px;

    padding: 0;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 99999;
`;