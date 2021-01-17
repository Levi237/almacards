import React, { Component } from 'react';
import styled               from 'styled-components';

import Painting             from './Painting';
import Floorplan            from './Floorplan';
import River            from './River';
;export default class HostelComponent extends Component {
    render(){
    const { project } = this.props;
        return(
            <>
                <Painting project={project}/>
                <Floorplan project={project}/>
                <River project={project}/>
            </>
        )
    }
}
