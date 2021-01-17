import React, { Component } from 'react';
import styled               from 'styled-components';

export default class HostelComponent extends Component {
    render(){
    const { project } = this.props;
        return(
            <>
            <GridTwo>
                <div>
                    <img src="./projects/hostel/shells.png"/>
                    <img src="./projects/hostel/shells.png"/>
                    <img src="./projects/hostel/shells.png"/>
                    <img src="./projects/hostel/shells.png"/>
                </div>
                <div>
                    <img src="./projects/hostel/painting.jpg"/>
                </div>
                <div>
                    <img src="./projects/hostel/vase.png"/>
                    <img src="./projects/hostel/lizard.png"/>
                    <img src="./projects/hostel/shells.png"/>
                    <img src="./projects/hostel/diagram1.png"/>
                    <img src="./projects/hostel/diagram2.png"/>
                </div>
            </GridTwo>
            <GridThree>
                <div>
                    <section><img src="./projects/hostel/floorplan-4.png"/></section>
                    <section><img src="./projects/hostel/floorplan-3.png"/></section>
                    <section><img src="./projects/hostel/floorplan-2.png"/></section>
                    <section><img src="./projects/hostel/floorplan-1.png"/></section>
                    <section><img src="./projects/hostel/floorplan-basement.png"/></section>
                </div>
            </GridThree>
            </>
        )
    }
}
const GridThree = styled.div``;
const GridTwo = styled.div`
    width: 80vw;
    padding: 10vw;
    background-color: #F6E6E9;
    display: grid;
    grid-template-columns: 15vw 63vw;
    grid-template-rows: 55vw 10vw;
    grid-template-areas: 
        ' sidebar painting '
        ' bottombar bottombar ';
    > div {
        &:first-of-type {
            grid-area: sidebar;
            > img {
                width: 10vw;
                margin: 3.34vw 0 0 0;
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
            > img {
                width: 10vw;
                margin: 0 2.5vw;
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