import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import LogIn from './LogIn';
import Nav from './Nav';
import BodyContainer from './BodyContainer';

// import {Route, Switch, NavLink, Redirect, withRouter} from 'react-router-dom';


class App extends Component {


  render(){

    return (
      <main >
        <Nav />
        <BodyContainer />
      
      </main>
      
      )


  }
}

export default App;
