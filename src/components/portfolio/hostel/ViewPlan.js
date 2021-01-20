import React, { Component } from 'react';
import styled               from 'styled-components';

import Key from './Key';
export default class ViewPlan extends Component {
    render(){
        const { project } = this.props;
        return(
            <LocalWrapper>
               <Key>Fourth Floor</Key>
                <section>
                    <div>
                    <img src="./projects/hostel/floorplan-4.png"/>
                    </div>
                </section>
                {/* <section>
                    <h2>
                        Third Floor
                    </h2>
                    <img src="./projects/hostel/floorplan-3.png"/>
                </section>
                <section>
                    <h2>
                        Second Floor
                    </h2>
                    <img src="./projects/hostel/floorplan-2.png"/>
                </section>
                <section>
                    <h2>
                        First Floor
                    </h2>
                    <img src="./projects/hostel/floorplan-1.png"/>
                </section>
                <section>
                    <h2>
                        Basement
                    </h2>
                    <img src="./projects/hostel/floorplan-basement.png"/>
                </section> */}
            </LocalWrapper>
        )
    }
}
const tabletWidth = 900;
const mobileWidth = 700;
const mobileMultiple = 1.25;
const LocalWrapper = styled.div`
    position: fixed;
    z-index: 1000000;
    overflow: auto;
    background-color: #fff;
    height: calc(100vh);
    width: 100vw;
    padding: 0;
    margin: 0;
    > section {
        &:first-of-type {
            br {
                display: none;
            }
        }
        &:last-of-type {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            > div {
                // height: 100vh;
                // width: 100vw;
                // position: absolute;
                img {
                    // transform: rotate(90deg);
                    // position: absolute;
                    width: 90vw;
                    // max-width: 180%;
                    // top: 25vh;
                    // left: -25vh;
                }
            }
        }
    }
    @media screen and (max-width: ${tabletWidth}px) {
        height: calc(100vh);
        width: 100vw;
        padding: 0;
        margin: 0;
        > section {
            &:first-of-type {
                position: absolute;
                top: 5vh;
                right: 0;
                text-align: right;
                br {
                    display: block;
                }
            }
            &:last-of-type {
                position: relative;
                height: 100vh;
                width: 100vw;
                overflow: hidden;
                > div {
                    height: 100vh;
                    width: 100vw;
                    position: absolute;
                    img {
                        transform: rotate(90deg);
                        position: absolute;
                        width: 90vh;
                        max-width: 180%;
                        top: 25vh;
                        left: -20vh;
                    }
                }
            }
        }
    }
`;