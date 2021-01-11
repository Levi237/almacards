import React, { Component } from 'react';
import styled               from 'styled-components';

export default class ShowPage extends Component {
    render(){
    const { project } = this.props;
        return(
            <LocalWrapper>
                <section>
                    <div>
                        <h1>{project.title}</h1>
                        <h2>{project.subtext}</h2>
                    </div>
                    <div>
                        <section style={{backgroundColor: project.pallet[0], color: project.pallet[0]}}>{project.pallet[0]}</section>
                        <section style={{backgroundColor: project.pallet[1], color: project.pallet[1]}}>{project.pallet[1]}</section>
                        <section style={{backgroundColor: project.pallet[2], color: project.pallet[2]}}>{project.pallet[2]}</section>
                        <section style={{backgroundColor: project.pallet[3], color: project.pallet[3]}}>{project.pallet[3]}</section>
                        <section style={{backgroundColor: project.pallet[4], color: project.pallet[4]}}>{project.pallet[4]}</section>
                    </div>
                    <p>{project.description}</p>
                </section>
                <section>
                    <img src={project.images[0]}/>
                    {/* <img src={project.images[1]}/> */}
                </section>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 20vw 100% 20vw;
    grid-template-areas: 
        ' sidebar hero hero '
        ' sidebar hero hero ';
    > section {
        &:first-of-type {
            grid-area: sidebar;
            padding-left: 2.5vw;
            > div:last-of-type {
                position: relative!important;
                width: 100%;
                text-align: center;
                > section {
                    display: inline-block;
                    width: 15%;
                    font-size: 3px;
                    text-align: center;
                    color: rgba(122,122,122,.5);
                }
            }
        }
        &:nth-of-type(2) {
            grid-area: hero;
        }
        &:nth-of-type(3) {
            grid-area: images;
        }
    }
    > section > div {
        position: absolute;
        width: 100vw;
    }
    h1 {
        font-size: 7.5vw;
        letter-spacing: .125vw;
        text-shadow: 4px 4px 20px rgba(255,255,255,0.95);    
    }
    h2, p {
        padding-left: 1vw;
        letter-spacing: .125vw;
    }
    h2 {
        font-size: 5vw;
        padding-top: 1vw;
        font-weight: 500;
    }
    p {
        margin-top: 16vw;
        font-size: 1vw;
        width: calc(90% - 4vw);
        line-height: 160%;
        // border-top: 1px solid lightgray;
        padding-top: 1vw;
        padding-right: 10%;
    }
    img {
        width: 100%;
    }
    @media screen and (max-width: 540px) {
        grid-template-columns: 100%;
        grid-template-rows: auto auto;
        grid-template-areas: 
            ' sidebar '
            ' hero ';
        > section > div {
            position: relative;
        }
        > section {
            &:first-of-type {
                padding-left: 0vw;
            }
        }
        h1, h2, p {
            padding: 0;
            width: 80vw;
            margin: 0 auto;
        }
        h2 {
            padding-left: 1.25vw;
        }
        p {
            margin: 2.5vw auto;
            font-size: 2.75vw;
            padding: 0 1.25vw;
        }
    }
`;