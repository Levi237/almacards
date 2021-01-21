import React, { Component } from 'react';
import styled               from 'styled-components';

export default class ViewNav extends Component {
    state = {
        plans: ['basement', 'first', 'second', 'third', 'fourth']
    }
    muteItem(e){
        let item = document.getElementsByClassName('floorplan-btn');
        for (let i = 0; i < item.length; i++){
            item[i].classList.add('toggle-invert');
        }
        e.preventDefault();
        console.log("click", e.currentTarget);
        e.currentTarget.classList.remove('toggle-invert');
    }
    render(){
        const mapPlans = this.state.plans.map((p) => { 
            return (
                <Button 
                    id={p}
                    className="floorplan-btn toggle-invert"
                    onClick={(e) => {this.muteItem(e)}}
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