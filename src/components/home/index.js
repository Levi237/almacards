import React, { Component } from 'react';
import styled               from 'styled-components';

export default class HomePage extends Component {
    state = {}
    render(){
        return(<>
            <LocalWrapper>
                <section>
                    <h1>❤️ Hello Alma ❤️</h1>
                    <iframe src="https://giphy.com/embed/XvZ8PJ4DSqzSM" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen />
                    <h1> </h1>
                </section>
            </LocalWrapper>
        </>);
    };
};

const LocalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    section {
        display: inline-block;
    }
`;