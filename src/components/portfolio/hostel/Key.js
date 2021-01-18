import React, { Component } from 'react';
import styled               from 'styled-components';

;export default class Key extends Component {
    state = {
        color: [{
            color: '#F2D6DC',
            label: 'Community (public)',
            area: '3,324'
        },{
            color: '#985651',
            label: 'Communal (resident)',
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
                return <tr><td><div><div style={{border: `${c.color} dashed`}}></div></div></td><td>{c.label}</td></tr>
            }
        })
        const numberKey = number.map((n, k) => {
            return <tr><td><div>{k + 1}</div></td><td>{n}</td></tr>
        })
        return(
            <LocalWrapper>
                <h1>Floor Plans</h1>
                <h4>SCALE: 1/4" - 1'O"</h4>
                <table>
                    {colorKey}
                </table>
                <table>
                    {numberKey}
                </table>
            </LocalWrapper>
        )
    }
}
const tabletWidth = 900;
const mobileWidth = 700;
const mobileMultiple = 1.25;
const LocalWrapper = styled.section`
    text-transform: uppercase;
    h1 {
        font-size: 40px;
        font-weight: 800;
        @media screen and (max-width: ${tabletWidth}px) {
            font-size: 5vw;
            margin: 0 1vw;
            padding: 0 .5vw;
        }
        @media screen and (max-width: ${mobileWidth}px) {
            font-size: calc(5vw * ${mobileMultiple});
            margin: 0 calc(1vw * ${mobileMultiple});
            padding:0 calc(5.vw * ${mobileMultiple});
        }
    }
    h4 {
        font-size: 20px;
        font-weight: 300;
        @media screen and (max-width: ${tabletWidth}px) {
            font-size: 2.5vw;
            margin: 0 1vw;
            padding: 0 .5vw;
        }
        @media screen and (max-width: ${mobileWidth}px) {
            font-size: calc(2.5vw * ${mobileMultiple});
            margin: 0 calc(1vw * ${mobileMultiple});
            padding: 0 calc(5.vw * ${mobileMultiple});
        }
    }
    table {
        display: inline-block;
        vertical-align: top;
        margin: 20px;
        &:first-of-type {
            border-spacing: 6px;
            tr {
                > td {
                    &:first-of-type {
                        > div {
                            height: 20px;
                            width: 30px;
                            > div {
                                height: 12px;
                            }
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
            @media screen and (max-width: ${tabletWidth}px) {
                border-spacing: .5vw;
                margin: 1vw;
                font-size: 2vw;
                tr {
                    > td {
                        &:first-of-type {
                            > div {
                                height: 4vw;
                                width: 6vw;
                                > div {
                                    height: 2vw;
                                    border-width: 1vw!important;
                                }
                            }
                        }
                        &:nth-of-type(2) {
                            width: 26vw;
                        }
                        &:nth-of-type(3) {
                            text-align: right;
                            width: 12vw;
                        }
                    }
                }
            }
            @media screen and (max-width: ${mobileWidth}px) {
                border-spacing: calc(.5vw * ${mobileMultiple});
                font-size: calc(2vw * ${mobileMultiple});
                margin: calc(1vw * ${mobileMultiple});
                tr {
                    > td {
                        &:first-of-type {
                            > div {
                                height: calc(4vw * ${mobileMultiple});
                                width: calc(4vw * ${mobileMultiple});
                                > div {
                                    height: calc(2vw * ${mobileMultiple});
                                    border-width: calc(1vw * ${mobileMultiple})!important;
                                }
                            }
                        }
                        &:nth-of-type(2) {
                            width: calc(26vw * ${mobileMultiple});
                        }
                        &:nth-of-type(3) {
                            text-align: right;
                            width: calc(12vw * ${mobileMultiple});
                        }
                    }
                }
            }
        }
        &:last-of-type {
            div {
                height: 20px;
                width: 20px;
                border: 4px solid black;
                border-radius: 100%;
                text-align: center;
            }
            @media screen and (max-width: ${tabletWidth}px) {
                border-spacing: .5vw;
                font-size: 2vw;
                margin: 1vw;
                div {
                    height: 3vw;
                    width: 3vw;
                    border: .5vw solid black;
                    line-height: 3vw;
                    border-radius: 100%;
                    text-align: center;
                }
            }
            @media screen and (max-width: ${mobileWidth}px) {
                font-size: calc(2vw * ${mobileMultiple});
                border-spacing: calc(.5vw * ${mobileMultiple});
                margin: calc(1vw * ${mobileMultiple});
                div {
                    height: calc(3vw * ${mobileMultiple});
                    width: calc(3vw * ${mobileMultiple});
                    line-height: calc(3vw * ${mobileMultiple});
                    border: calc(.5vw * ${mobileMultiple}) solid black;
                    border-radius: 100%;
                    text-align: center;
                }
            }
        }
    }
`;