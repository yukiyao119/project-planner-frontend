import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import LogIn from './LogIn';
import Nav from './Nav';
import BodyContainer from './BodyContainer';
import About from './About'
import {Route, Switch} from 'react-router-dom'
// import {Route, Switch, NavLink, Redirect, withRouter} from 'react-router-dom';


class App extends Component {


  render(){

    return (
      <main >
        <Nav />
        <Switch>
          <Route exact path={'/'} component={BodyContainer}/>
          <Route path={'/about'} component={About}/>
        </Switch>
        
      
      </main>
      
      )


  }
}

export default App;
