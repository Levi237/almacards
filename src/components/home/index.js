import React, { Component } from 'react';
import styled               from 'styled-components';

export default class HomePage extends Component {
    state = {}
    render(){
        return(<>
            <div>
              <h1>❤️ Hello Alma ❤️</h1>
              <iframe src="https://giphy.com/embed/XvZ8PJ4DSqzSM" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen />
              <h1> </h1>
            </div>
        </>);
    };
};