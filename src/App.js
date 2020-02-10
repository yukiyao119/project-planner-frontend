import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import BodyContainer from './containers/BodyContainer';
import About from './components/About';
import {Route, Switch} from 'react-router-dom';


class App extends Component {


  render(){

    return (
      <main >
      
        <Nav />
        
        <Switch>
          <Route exact path={'/'} component={BodyContainer} />
          <Route path={'/about'} component={About} />
          {/* <Redirect to='/' /> */}
        </Switch>

      </main>
      
      )


  }
}

export default App;
