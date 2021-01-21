import React, { Component } from 'react';
import styled               from 'styled-components';

import Key from './Key';
export default class Floorplan extends Component {
    render(){
        const { plans, selectPlan } = this.props;
        const mapPlans = plans.map((p, k) => {
            return (
                <section key={k} id={p} onClick={(e) => selectPlan(e)}>
                    <h4>
                        {p} Floor
                    </h4>
                    <img src={`./projects/hostel/floorplan-${p}.png`}/>
                </section>
            );
        });
        return(
            <LocalWrapper>
               <Key/>
                <div>
                    <img src="./projects/hostel/floorplan-cross_section.png"/>
                </div>
                <div>
                  {mapPlans}
                </div>
            </LocalWrapper>
        )
    }
}
const tabletWidth = 900;
const mobileWidth = 700;
const mobileMultiple = 1.25;
const LocalWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width 800px;
    margin: 0 auto;
    padding: 50px 0;
    > div {
        display: inline-block;
        &:first-of-type {
            width: 70%
        }
        &:last-of-type {
            width: 26%;
            > section {
                position: relative;
            }
            img {
                cursor: zoom-in;
            }
            h4 {
                position: absolute;
                top: 1%;
                left: 1%;
            }
        }
        img {
            width: 100%;
        }
    }
    @media screen and (max-width: ${tabletWidth}px) {
        width: 100vw;
        max-width 100vw;
        margin: 0 auto;
        padding: 50px 0;
        > div {
            display: inline-block;
            &:first-of-type {
                width: 70vw
            }
            &:last-of-type {
                width: 26vw;
                > section {
                    position: relative;
                }
                img {
                    cursor: zoom-in;
                }
                h4 {
                    position: absolute;
                    font-size: 2.5vw;
                    top: 1vw;
                    left: 1vw;
                }
            }
            img {
                width: 100%;
            }
        }
    }
`;