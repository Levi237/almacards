import React, { Component } from 'react';
import { Switch, Route }   from 'react-router-dom';
import styled               from 'styled-components';
import * as routes          from './constants/routes';

import NavMenu from './components/nav/NavMenu';
import NavHamburger from './components/nav/NavHamburger';

import EmailConfirmation from './components/contact/EmailConfirmation';
import EmailSignup from './components/contact/EmailSignup';

export default class App extends Component {
  state = {
    emailContact: "",
    pageStyle: {
      home: {
        title: "",
        color: "#fff",
        logoColor: "invert(0)",
        displayLogo: "none",
      },
      about: {
        title: "",
        color: "#181717",
        logoColor: "invert(0)",
        displayLogo: "none",
      },
      portfolio: {
        title: "portfolio",
        color: "#fff",
        logoColor: "invert(0)",
        displayLogo: "inline-block",
      },
      mail: {
        title: "contact",
        color: "#181717",
        logoColor: "invert(1)",
        displayLogo: "inline-block",
      },
      root: {
        title: "",
        color: "#fff",
        logoColor: "invert(0)",
        displayLogo: "none",
      }
    }
  }
  toggleMenu = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
  toggleEmailSignup = (e) => {
    const emailForm = document.getElementById('email');
    emailForm.classList.toggle('active');
    emailForm.classList.toggle('inactive');
    this.setState({
      emailContact: e.currentTarget.value
    });
  };
  render(){
    const { emailContact, pageStyle } = this.state
    return (
      <AppContainer>
                <NavMenu toggleMenu={this.toggleMenu}/>
        <EmailSignup contactType={emailContact} toggleEmailSignup={this.toggleEmailSignup}/>
        <Switch>
          <Route path={routes.CNFM} exact render={() => <EmailConfirmation/> }/>     
          <Route path={routes.HOME} exact render={() => <></>}/>
          <Route path={routes.PORT} exact render={() => <></>}/>
          <Route path={routes.ROOT} render={() => <></>}/>
        </Switch>
        <div>
          <h1>❤️ Hello Alma ❤️</h1>
          <iframe src="https://giphy.com/embed/XvZ8PJ4DSqzSM" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen />
          <h1> </h1>
        </div>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  h1 {
    text-align: center;
  }
  div {
    display: inline-block;
  }
`;