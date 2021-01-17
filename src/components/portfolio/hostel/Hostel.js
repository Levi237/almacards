import React, { Component } from 'react';
import styled               from 'styled-components';

import Painting             from './Painting';
import Floorplan            from './Floorplan';
;export default class HostelComponent extends Component {
    render(){
    const { project } = this.props;
        return(
            <>
           <Painting project={project}/>
           <Floorplan project={project}/>
            <GridFour>
                <img src="./projects/hostel/river.jpg"/>
                <img src="./projects/hostel/roof-frame-draft.png"/>
            </GridFour>
            </>
        )
    }
}
const GridFour = styled.div`
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