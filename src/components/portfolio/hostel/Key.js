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
                return <tr><td><div style={{background: `${c.color}`}}></div></td><td><section>{c.label}</section><section>{c.area} <small>SQ FT</small></section></td></tr>
            } else {
                return <tr><td><div><div style={{border: `${c.color} dashed`}}></div></div></td><td>{c.label}</td></tr>
            }
        })
        const numberKey = number.map((n, k) => {
            return <tr><td><div>{k + 1}</div></td><td>{n}</td></tr>
        })
        return(
            <LocalWrapper>
                {(this.props.children)
                ? <><h1>{this.props.children} Level</h1><h3>Floor Plans</h3></>
                : <h1>Floor Plans</h1>
                }
                <h4>SCALE: 1/4" - 1'O"</h4>
                <ColorTable>
                    {colorKey}
                </ColorTable>
                <br/>
                <NumberTable>
                    {numberKey}
                </NumberTable>
            </LocalWrapper>
        )
    }
}
const tabletWidth = 900;
const mobileWidth = 700;
const mobileMultiple = 1.25;
const GlobalTable = styled.table`
    display: inline-block;
    vertical-align: top;
    margin: 20px;
    text-align: left;
    border-spacing: 0;
    font-size: 14px;
    @media screen and (max-width: ${tabletWidth}px) {
        margin: 3vw;
    }
    @media screen and (max-width: ${mobileWidth}px) {
        margin: 0 calc(3vw * ${mobileMultiple});
    }
`;
const ColorTable = styled(GlobalTable)`
    section {
        display: inline-block;
        &:last-of-type {
            text-align: right;
            float: right;
        }
    }
    tr {
        td {
            &:first-of-type {
                > div {
                    height: 18px;
                    width: 30px;
                    margin: 2px;
                    > div {
                        height: 12px;
                    }
                }
            }
            &:nth-of-type(2) {
                width: 260px;
            }
            &:nth-of-type(3) {
                text-align: right;
                width: 90px;
            }
        }
    }
    @media screen and (max-width: ${tabletWidth}px) {
        margin: 1vw;
        font-size: 2vw;
        section {
            display: block;
            &:last-of-type {
                text-align: left;
                float: left;
            }
        }
        tr {
            td {
                &:first-of-type {
                    > div {
                        height: 4vw;
                        width: 6vw;
                        margin: .2vw;
                        > div {
                            height: 2vw;
                            border-width: 1vw!important;
                        }
                    }
                }
                &:nth-of-type(2) {
                    width: 25vw;
                }
                &:nth-of-type(3) {
                    text-align: right;
                    width: 12vw;
                }
            }
        }
    }
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: calc(2vw * ${mobileMultiple});
        margin: 0 calc(1vw * ${mobileMultiple});
        tr {
            td {
                &:first-of-type {
                    > div {
                        height: calc(4vw * ${mobileMultiple});
                        width: calc(4vw * ${mobileMultiple});
                        margin: calc(.2vw * ${mobileMultiple});
                        > div {
                            height: calc(2vw * ${mobileMultiple});
                            border-width: calc(1vw * ${mobileMultiple})!important;
                        }
                    }
                }
                &:nth-of-type(2) {
                    width: calc(25vw * ${mobileMultiple});
                }
                &:nth-of-type(3) {
                    width: calc(12vw * ${mobileMultiple});
                }
            }
        }
    }
`;
const NumberTable = styled(GlobalTable)`
    div {
        height: 18px;
        width: 18px;
        border: 2px solid #000;
        border-radius: 100%;
        text-align: center;
    }
    @media screen and (max-width: ${tabletWidth}px) {
        font-size: 2vw;
        margin: 1vw;
        div {
            height: 2.25vw;
            width: 2.25vw;
            border: .5vw solid #000;
            background-color: #fff;
            line-height: 2.25vw;
            border-radius: 100%;
            text-align: center;
        }
        tr {
            td {
                &:nth-of-type(2) {
                    width: calc(25vw + 2vw);
                }
            }
        }
    }
    @media screen and (max-width: ${mobileWidth}px) {
        font-size: calc(2vw * ${mobileMultiple});
        margin: 0 calc(1vw * ${mobileMultiple});
        div {
            height: calc(2.25vw * ${mobileMultiple});
            width: calc(2.25vw * ${mobileMultiple});
            line-height: calc(2.25vw * ${mobileMultiple});
            border: calc(.5vw * ${mobileMultiple}) solid #000;
            border-radius: 100%;
            text-align: center;
        }
        tr {
            td {
                &:nth-of-type(2) {
                    width: calc(25vw * ${mobileMultiple});
                }
            }
        }
    }
`;
const LocalWrapper = styled.section`
    text-transform: uppercase;
    width: 100%;
    text-align: left;
    position: absolute;
    margin: 1vw;
    @media screen and (max-width: ${tabletWidth}px) {
        position: relative;
    }
    h1 {
        font-size: 40px;
        font-weight: 800;
        @media screen and (max-width: ${tabletWidth}px) {
            font-size: 4vw;
            margin: 0 1vw;
            padding: 0 .5vw;
        }
        @media screen and (max-width: ${mobileWidth}px) {
            font-size: calc(4vw * ${mobileMultiple});
            margin: 0 calc(1vw * ${mobileMultiple});
            padding:0 calc(5.vw * ${mobileMultiple});
        }
    }
    h3 {
        font-size: 30px;
        font-weight: 500;
        @media screen and (max-width: ${tabletWidth}px) {
            font-size: 3.25vw;
            margin: 0 1vw;
            padding: 0 .5vw;
        }
        @media screen and (max-width: ${mobileWidth}px) {
            font-size: calc(3.25vw * ${mobileMultiple});
            margin: 0 calc(1vw * ${mobileMultiple});
            padding:0 calc(.5vw * ${mobileMultiple});
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
            padding: 0 calc(.5vw * ${mobileMultiple});
        }
    }
`;