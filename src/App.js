import React, { Component } from 'react';
import styled               from 'styled-components';
import { Switch, Route }    from 'react-router-dom';
import * as routes          from './constants/routes';

// import NavMenu from './components/nav/NavMenu';
import NavBar from './components/nav/NavBar';

import EmailConfirmation from './components/contact/EmailConfirmation';
import EmailSignup from './components/contact/EmailSignup';

import ViewPlan from './components/portfolio/hostel/ViewPlan';

import HomePage from './components/home';
import Portfolio from './components/portfolio';

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
    },
    plans: ['basement', 'first', 'second', 'third', 'fourth'],
    plan: null
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
muteItem = (e) => {
    e.preventDefault();
    console.log("click", e.currentTarget.id);
    this.setState({
        plan: e.currentTarget.id
    });
}
selectPlan = (e) => {
  e.preventDefault();
  console.log("click to App state", e.currentTarget.id, "where is the id");
  this.setState({
      plan: e.currentTarget.id
  });
}
  render(){
    const { emailContact, pageStyle, plans, plan } = this.state
    return (
      <AppContainer>
        {/* <NavMenu toggleMenu={this.toggleMenu}/> */}
        <EmailSignup contactType={emailContact} toggleEmailSignup={this.toggleEmailSignup}/>
        {plan && <ViewPlan muteItem={this.muteItem} plan={plan} plans={plans}/>}
        <header className="header">
          <NavBar/>
        </header>
        <div className="body">
          <Switch>
            <Route path={routes.CONF} exact render={() => <EmailConfirmation/> }/>     
            <Route path={routes.INFO} exact render={() => <h1>About Stuff</h1> }/>
            <Route path={routes.PORT} exact render={() => <Portfolio selectPlan={this.selectPlan} plans={plans}/> }/>
            <Route path={routes.ROOT} render={() => <HomePage/> }/>
          </Switch>
        </div>
        <footer>
          FOOTER HERE
        </footer>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
header {
  padding-bottom: 20px;
}
`;