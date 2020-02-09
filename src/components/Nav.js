import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {


    render() {

        return (
            <div style={navBarStyle}>
                <h1 className="ui center aligned header purple" id="fonts">Better Than Trello</h1>
                <NavLink 
                    to='/'
                    activeClassName='name-watever-you-want'
                    activeStyle={navLinkStyle}
                    >
                    HOME
                </NavLink>
                |   <NavLink 
                    to='/about'
                    activeClassName='name-watever-you-want'
                    activeStyle={navLinkStyle}
                    >
                      ABOUT
                    </NavLink>
            </div>
        )
    }
}

const navBarStyle={
    margin: '15px',
    textAlign: 'center'
}

const navLinkStyle = {
    margin: '10px'
}