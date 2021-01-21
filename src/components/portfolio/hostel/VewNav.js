import React, { Component } from 'react';
import styled               from 'styled-components';

export default class ViewNav extends Component {
    render(){
        const { plan, plans, muteItem } = this.props
        const mapPlans = plans.map((p) => { 
            return (
                <Button 
                    id={p}
                    className={plan !== p && `toggle-mute`}
                    onClick={(e) => {muteItem(e)}}
                >
                    <span>{p}</span>
                    <img className="" src={`./projects/hostel/floorplan-${p}.png`}/>
                </Button>
            )
        });
        return(
            <LocalWrapper>
                {mapPlans}
            </LocalWrapper>
        );
    };
};

const tabletWidth = 900;
const LocalWrapper = styled.section`
    position: absolute;
    z-index: 9000000000000;
    right: 1vw;
    top: 1vw;
    @media screen and (max-width: ${tabletWidth}px) {
        width: 40vw;
        right: 1vw;
        top: 84vw;
    }
`;
const Button = styled.button`
    display: inline-block;
    width: 100px;
    border: none;
    background: transparent;
    text-transform: uppercase;
    font-size: 12px;
    text-align: left;
    span {
        margin-left: 7.5%;
    }
    img{
        margin-top: -14px;
        width: 100%;
    }
    @media screen and (max-width: ${tabletWidth}px) {
        display: block;
        width: 25vw;
        font-size: 2.75vw;
        img {
            margin-top: -4vw;
        }
    }
`; 