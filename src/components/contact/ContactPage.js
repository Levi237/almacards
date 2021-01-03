import React, { Component } from 'react';
import styled               from 'styled-components';

import EmailForm       from './EmailForm';

export default class ContactPage extends Component { 
    
    render(){
        return(
            <Container id="contact" className="contact-container">
                <EmailForm>
                <h1 className="titleDecoration">CONTACT</h1>
                <p>
                    Thank you for taking an interest in my work!  
                    Please include your first name, email contact, 
                    and a brief message and I will send you a 
                    confirmation via email right away :)
                </p>
                </EmailForm>
            </Container>
        );
    };
};

const Container = styled.div`
    width: 100vw;
    height: calc(100vh);
    background: #fff;
    padding-top: 0;
    position: fixed;
    overflow: scroll;
    h1 {
        color: #181717;
        padding-top: 40px;
    }
    p {
        margin-top: 40px;
        padding: 0 5%;
        color: rgba(24, 23, 23, .75);
    }
    @media screen and (max-width: 745px) {
        align-items: start;
        h1 {
            padding-top: 0;
        }
        p {
            margin-top: 20px;
    }
`;