import React, { Component } from 'react';
import styled               from 'styled-components';

import Key from './Key';
import { breakStatement } from '@babel/types';

import ViewNav from './VewNav';
export default class ViewFloorplan extends Component {
    render(){
        const { hostelPlans, hostelPlan, muteItem } = this.props;
        // const mapPlans = plans.map( p => { return <img className="toggle-display" src={`./projects/hostel/floorplan-${p}.png`}/> });
        return(
            <LocalWrapper>
               <Key>{hostelPlan}</Key>
                <ViewNav muteItem={muteItem} hostelPlans={hostelPlans} hostelPlan={hostelPlan}/>
                <section><span><i></i></span><small>CLOSE</small></section>
                <section>
                    <div>
                        <img className="" src={`./projects/hostel/floorplan-${hostelPlan}.png`}/>
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
        &:nth-of-type(3){
            position: absolute;
            bottom: 0;
            // font-size: 100px;
            font-weight: 100;
            left: calc(50% - 50px);
            span > i {
                transform: rotate(-135deg);
                border: solid black;
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 3px;s
            }
            small {
                display: block;
                font-size: 9px;
                width: 100vw;
                text-align: center;
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