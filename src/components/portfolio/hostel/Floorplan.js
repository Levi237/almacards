import React, { Component } from 'react';
import styled               from 'styled-components';

;export default class Floorplan extends Component {
    state = {
        color: [{
            color: '#F2D6DC',
            label: 'Community (public) Area',
            area: '3,324'
        },{
            color: '#985651',
            label: 'Communal (resident) Area',
            area: '963'
        },{
            color: '#5D504E',
            label: 'Staff Area',
            area: '308'
        },{
            color: '#717366',
            label: 'Sleeping Unit',
            area: '1,183'
        },{
            color: '#2E5159',
            label: 'Circulation',
            area: null
        }],
        number: [
            'computer area', 
            'laundry area', 
            'office / storage',
            'reception / lobby',
            'sleeping unit'
        ]
    }
    render(){
        const { color, number } = this.state;
        const { project } = this.props;
        const colorKey = color.map((c, k) => {
            console.log(k, "k")
            if (c.area) {
                return <tr><td><div style={{background: `${c.color}`}}></div></td><td>{c.label}</td><td>{c.area} <small>SQ FT</small></td></tr>
            } else {
                return <tr><td style={{border: `${c.color} dashed 4px`}}></td><td>{c.label}</td></tr>
            }
        })
        const numberKey = number.map((n, k) => {
            return <tr><td><div>{k + 1}</div></td><td>{n}</td></tr>
        })
        return(
            <LocalWrapper>
                <table>
                    {colorKey}
                </table>
                <table>
                    {numberKey}
                </table>
                <div>
                    <img src="./projects/hostel/floorplan-cross_section.png"/>
                </div>
                <div>
                    <section>
                        <h4>
                            Fourth Floor
                        </h4>
                        <img src="./projects/hostel/floorplan-4.png"/>
                    </section>
                    <section>
                        <h4>
                            Third Floor
                        </h4>
                        <img src="./projects/hostel/floorplan-3.png"/>
                    </section>
                    <section>
                        <h4>
                            Second Floor
                        </h4>
                        <img src="./projects/hostel/floorplan-2.png"/>
                    </section>
                    <section>
                        <h4>
                            First Floor
                        </h4>
                        <img src="./projects/hostel/floorplan-1.png"/>
                    </section>
                    <section>
                        <h4>
                            Basement
                        </h4>
                        <img src="./projects/hostel/floorplan-basement.png"/>
                    </section>
                </div>
            </LocalWrapper>
        )
    }
}
const LocalWrapper = styled.div`
table {
    display: inline-block;
    &:first-of-type {
        border-spacing: 6px;
        tr {
            > td {
                &:first-of-type {
                    > div {
                        height: 20px;
                        width: 30px;
                    }
                }
                &:nth-of-type(2) {
                    width: 200px;
                }
                &:nth-of-type(3) {
                    text-align: right;
                    width: 90px;
                }
            }
        }
    }
    &:last-of-type {
        text-transform: uppercase;
        div {
            height: 20px;
            width: 20px;
            border: 2px solid black;
            border-radius: 100%;
            text-align: center;
        }
    }
}
    
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