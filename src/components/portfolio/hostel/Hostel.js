import React, { Component } from 'react';
import styled               from 'styled-components';

import Painting             from './Painting'
import Floorplan            from './Floorplan'
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
const GridThree = styled.div`
    width: 100%;
    max-width 800px;
    // min-height: 100vh;
    margin: 0 auto;
    padding: 50px 0;
    > div {
        display: inline-block;
        &:first-of-type {
            width: 70%
        }
        &:last-of-type {
            width: 30%;
            > section {
                position: relative;
            }
            img {
                cursor: zoom-in;
            }
            h4 {
                position: absolute;
                top: 1vw;
                left: 1vw;
            }
        }
        img {
            width: 100%;
            // cursor: zoom-in;
        }
    }
`;
const GridTwo = styled.div`
    width: 80vw;
    padding: 10vw;
    background-color: #F6E6E9;
    display: grid;
    grid-template-columns: 15vw 63vw;
    grid-template-rows: 42vw 15vw;
    grid-template-areas: 
        ' sidebar painting '
        ' sidebar bottombar ';
    > div {
        &:first-of-type {
            grid-area: sidebar;
            > img {
                width: 11vw;
                margin: 2.5vw 0 0 0;
                &:first-of-type {
                    margin: 0;
                }
            }
        }
        &:nth-of-type(2) {
            grid-area: painting;
            > img {
                width: 100%;
                margin: 0 0 0 0;
            }
        }
        &:nth-of-type(3) {
            grid-area: bottombar;
            section {
                display: inline-block;
                vertical-align: top;
                text-align: center;
                width: 10vw;
                margin: 0 1.3vw;
                img {
                    width: 100%;
                }
                h4 {
                    font-size: 1.125vw;
                    text-transform: uppercase;
                    font-weight: 300;
                }
            }
        }
    }
    h1 {
        font-size: 7.5vw;
        letter-spacing: .125vw;
    }
    h2 {
        font-size: 5vw;
    }
    p {
        font-size: 1vw;
    }
    @media screen and (max-width: 540px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto auto auto;
        grid-template-areas: 
        ' . one two three four . '
        ' . painting painting painting painting . '
        ' . five five five five . ';
        p {
            font-size: 2.75vw;
        }
        > div > img {
            width: 100%;
        }
    }
`;