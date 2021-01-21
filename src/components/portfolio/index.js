import React, { Component } from 'react';
import styled               from 'styled-components';
import Hostel               from './hostel/Hostel';
export default class Portfolio extends Component {
    state = {
        portfolio: [{
            title: 'Organic Flow',
            subtext: 'Hostel',
            location: 'amsterdam', 
            tabImg: '',
            images: ['./projects/hostel/hero.jpg','./projects/hostel/painting.jpg'],
            pallet: ['#021526','#213A40','#8C4D4D','#594C4C','#F3D6DB'],
            description: 'The smooth shapes in the painting inspired the concept for the design of the project. Curved elements were designed in the space to mimick the sea shells and the natural movement of the lizzard. The curves in the space help residents move easily within the flow in the space making their stay here effortless.'
        },{ 
            title: 'Nike Space Hippie',
            subtext: 'Popup Shop',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#90C7C3','#A44D0C','#FA3619','#8D746D','#000000'],
            description: ''
        },{ 
            title: 'Nostalgic Portal',
            subtext: 'LA Union Station',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#A6767E','#D99CCF','#07F2DB','#119E8C','#0D0D0D'],
            description: ''
        },{ 
            title: 'Fresh',
            subtext: 'Material Board',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#185FA2','#0194E8','#EDC21D','#7BAA9E','#3E6653'],
            description: ''
        },{ 
            title: 'Syria',
            subtext: 'Restaurant',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#c4c4c4','#c4c4c4','#c4c4c4','#c4c4c4','#c4c4c4'],
            description: ''
        },{ 
            title: 'Embrace',
            subtext: 'Hotel Lobby',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#c4c4c4','#c4c4c4','#c4c4c4','#c4c4c4','#c4c4c4'],
            description: ''
        }],
        selected: ''
    }
    selectPortfolio(e){
        this.setState({
            selected: e.currentTarget.id
        })
    }
    render(){
        const { portfolio, selected } = this.state;
        const { hostelPlan, hostelPlans, selectPlan } = this.props;
        const mapPortfolio = portfolio.map((m,k)=>{
            return(
                <div id={k} key={k} onClick={(e) => this.selectPortfolio(e)}>
                    <div id="image"></div>
                    <h2>
                        {m.title}
                    </h2>
                    <section style={{backgroundColor: m.pallet[0], color: m.pallet[0]}}>{m.pallet[0]}</section>
                    <section style={{backgroundColor: m.pallet[1], color: m.pallet[1]}}>{m.pallet[1]}</section>
                    <section style={{backgroundColor: m.pallet[2], color: m.pallet[2]}}>{m.pallet[2]}</section>
                    <section style={{backgroundColor: m.pallet[3], color: m.pallet[3]}}>{m.pallet[3]}</section>
                    <section style={{backgroundColor: m.pallet[4], color: m.pallet[4]}}>{m.pallet[4]}</section>
                </div>
            );
        });
        return(<>
            { (selected === "0") && <Hostel project={portfolio[selected]} selectPlan={selectPlan} hostelPlans={hostelPlans}/> }
            <LocalWrapper>
                {mapPortfolio}
            </LocalWrapper>
        </>);
    };
};

const LocalWrapper = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 30vw 30vw;
    grid-template-area:
    ' one two three '
    ' four five six';
    div#1 {
        grid-area: one;
    }
    div#2 {
        grid-area: two;
    }
    div#3 {
        grid-area: three;
    }
    div#4 {
        grid-area: four;
    }
    div#5 {
        grid-area: five;
    }
    div#6 {
        grid-area: six;
    }
    div#image{
        height: 20vw;
        width: 20vw;
        margin: 0 auto;
        background-color: pink;
    }
    > div {
        h2 {
            font-size: 20px;
        }
        section {
            display: inline-block;
            width: 15%;
            font-size: 3px;
            text-align: center;
            color: rgba(122,122,122,.5);
        }
    }
`;