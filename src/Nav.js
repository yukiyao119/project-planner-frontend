import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {


    render() {

        return (
            <div style={navBarStyle}>
                <h1 className="ui center aligned header purple">Better Than Trello</h1>
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
    // border: '1px black solid',
    margin: '15px',
    textAlign: 'center'
}

const navLinkStyle = {
    background: '#C8D0DA',
    // padding: '5px',
    margin: '10px'
}