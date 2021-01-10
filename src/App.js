import React, { Component } from 'react';
import styled               from 'styled-components';
import { Switch, Route }    from 'react-router-dom';
import * as routes          from './constants/routes';

import NavMenu from './components/nav/NavMenu';
import NavHamburger from './components/nav/NavHamburger';

import EmailConfirmation from './components/contact/EmailConfirmation';
import EmailSignup from './components/contact/EmailSignup';

import HomePage from './components/home';

export default class App extends Component {
  state = {
    emailContact: "",
    pageStyle: {
      home: {
        title: "",
        color: "#312D02",
        logoColor: "invert(0)",
        displayLogo: "inline-block;",
      },
      about: {
        title: "",
        color: "#312D02",
        logoColor: "invert(0)",
        displayLogo: "inline-block;",
      },
      portfolio: {
        title: "portfolio",
        color: "#312D02",
        logoColor: "invert(0)",
        displayLogo: "inline-block",
      },
      mail: {
        title: "contact",
        color: "#312D02",
        logoColor: "invert(1)",
        displayLogo: "inline-block",
      },
      root: {
        title: "",
        color: "#312D02",
        logoColor: "invert(0)",
        displayLogo: "inline-block;",
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
        <div className="header">
          <Switch>         
            <Route path={routes.HOME} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.home}/> }/>
            <Route path={routes.PORT} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.portfolio}/> }/>
            <Route path={routes.INFO} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.about}/> }/>
            <Route path={routes.CONT} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.mail}/> }/>
            <Route path={routes.ROOT} render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.root}/> }/>
          </Switch>
        </div>
        <div className="body">
          <Switch>
            <Route path={routes.CONF} exact render={() => <EmailConfirmation/> }/>     
            <Route path={routes.INFO} exact render={() => <h1>About Stuff</h1> }/>
            <Route path={routes.PORT} exact render={() => <h1>Portfolio</h1> }/>
            <Route path={routes.ROOT} render={() => <HomePage/> }/>
          </Switch>
        </div>
        <div className="footer">

        </div>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  display: grid;
  grid-template-areas: 
    ' header '
    ' body '
    ' footer ';
  > 
`;