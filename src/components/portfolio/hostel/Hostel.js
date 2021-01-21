import React, { Component } from 'react';
import styled               from 'styled-components';

import Painting             from './Painting';
import Floorplan            from './Floorplan';
import River            from './River';
import ShowHero from '../ShowHero';
;export default class Hostel extends Component {
    state = {
    }
    render(){
        const { project, selectPlan, hostelPlans } = this.props;
        return(
            <>
                <ShowHero project={project}/>
                <Painting project={project}/>
                <Floorplan project={project} hostelPlans={hostelPlans} selectPlan={selectPlan}/>
                <River project={project}/>
            </>
        )
    }
}
