import React, { Component } from 'react';
import styled               from 'styled-components';
import HostelComponent             from './hostel/Hostel'
export default class Portfolio extends Component {
    state = {
        portfolio: [{
            id: 1, 
            title: 'Organic Flow',
            subtext: 'Hostel',
            location: 'amsterdam', 
            tabImg: '',
            images: ['./projects/hostel/hero.jpg','./projects/hostel/painting.jpg'],
            pallet: ['#021526','#213A40','#8C4D4D','#594C4C','#F3D6DB'],
            description: 'The smooth shapes in the painting inspired the concept for the design of the project. Curved elements were designed in the space to mimick the sea shells and the natural movement of the lizzard. The curves in the space help residents move easily within the flow in the space making their stay here effortless.'
        },{
            id: 2, 
            title: 'Nike Space Hippie',
            subtext: 'Popup Shop',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#90C7C3','#A44D0C','#FA3619','#8D746D','#000000'],
            description: ''
        },{
            id: 3, 
            title: 'Nostalgic Portal',
            subtext: 'LA Union Station',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#A6767E','#D99CCF','#07F2DB','#119E8C','#0D0D0D'],
            description: ''
        },{
            id: 4, 
            title: 'Fresh',
            subtext: 'Material Board',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#185FA2','#0194E8','#EDC21D','#7BAA9E','#3E6653'],
            description: ''
        },{
            id: 5, 
            title: 'Syria',
            subtext: 'Restaurant',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#c4c4c4','#c4c4c4','#c4c4c4','#c4c4c4','#c4c4c4'],
            description: ''
        },{
            id: 6, 
            title: 'Embrace',
            subtext: 'Hotel Lobby',
            location: '',
            tabImg: '',
            images: ['',''],
            pallet: ['#c4c4c4','#c4c4c4','#c4c4c4','#c4c4c4','#c4c4c4'],
            description: ''
        }],
        selected: []
    }

    render(){
        const { portfolio } = this.state;
        const { selectPlan } = this.props;
        return(<>
                <HostelComponent project={portfolio[0]} selectPlan={selectPlan}/>
        </>);
    };
};