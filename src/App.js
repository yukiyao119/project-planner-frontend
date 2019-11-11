import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
// import LogIn from './LogIn';
import Nav from './Nav';
import BodyContainer from './BodyContainer';

// import {Route, Switch, NavLink, Redirect, withRouter} from 'react-router-dom';


class App extends React.Component {


  render(){

    return (
      <main >
        <Nav className="container"/>
        <BodyContainer />
      
      </main>
      
      )


  }
}

export default App;
