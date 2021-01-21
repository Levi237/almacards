import React, { Component } from 'react';
import styled               from 'styled-components';

import Painting             from './Painting';
import Floorplan            from './Floorplan';
import River            from './River';
import ShowHero from '../ShowHero';
;export default class HostelComponent extends Component {
    state = {
    }
    render(){
        const { project, selectPlan, plans } = this.props;
        return(
            <>
                <ShowHero project={project}/>
                <Painting project={project}/>
                <Floorplan project={project} plans={plans} selectPlan={selectPlan}/>
                <River project={project}/>
            </>
        )
    }
}
