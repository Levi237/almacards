import React, { Component } from 'react';
import styled               from 'styled-components';

;export default class River extends Component {
    render(){
    const { project } = this.props;
        return(
            <>
            <LocalHost>
                <img src="./projects/hostel/river.jpg"/>
                <img src="./projects/hostel/roof-frame-draft.png"/>
            </LocalHost>
            </>
        )
    }
}
const LocalHost = styled.div`
    text-align: center;
    img {
        &:first-of-type {
            width: 80%;
            max-width: 800px;
            margin: 50px auto;
        }
        &:nth-of-type(2) {
            width: 70%;
            margin-top: -30vw;
            opacity: .25;
        }
    }
`;