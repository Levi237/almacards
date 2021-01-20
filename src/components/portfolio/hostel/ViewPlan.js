import React, { Component } from 'react';
import styled               from 'styled-components';

import Key from './Key';
import { breakStatement } from '@babel/types';
export default class ViewPlan extends Component {
    state = {
        plans: ['basement', 'first', 'second', 'third', 'fourth']
    }
    render(){
        const { plans } = this.state;
        // const mapPlans = plans.map((p, k) => {
        //     return (
        //         <>
        //             <Key>{p} Floor</Key>
        //             <section>
        //                 <div>
        //                 <img src={`./projects/hostel/floorplan-${p}.png`}/>
        //                 </div>
        //             </section>
        //         </>
        //     )
        // })
        return(
            <LocalWrapper>
               <Key>{plans[3]}</Key>
                <section><h1>TEST</h1>test</section>
                <section>
                    <div>
                        <img src={`./projects/hostel/floorplan-${plans[3]}.png`}/>
                    </div>
                </section>
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
    height: 100%;
    width: 100vw;
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
                img {
                    width: 90vw;    
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
                top: 6vh;
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
                        top: 27vh;
                        left: -20vh;
                    }
                }
            }
        }
    }
`;