import React, { Component } from 'react';
import styled               from 'styled-components';

import Key from './Key';
import { breakStatement } from '@babel/types';

import ViewNav from './VewNav';
export default class ViewPlan extends Component {
    render(){
        const { plans, plan, muteItem } = this.props;
        // const mapPlans = plans.map( p => { return <img className="toggle-display" src={`./projects/hostel/floorplan-${p}.png`}/> });
        return(
            <LocalWrapper>
               <Key>{plan}</Key>
                <ViewNav muteItem={muteItem} plans={plans} plan={plan}/>
                <section>
                    <div>
                        <img className="" src={`./projects/hostel/floorplan-${plan}.png`}/>
                        {/* {mapPlans} */}
                    </div>
                </section>
            </LocalWrapper>
        );
    };
};
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
                margin-top: calc(10vw);
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
                    position: relative;
                    margin-top: 0;
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