import React, { Component } from 'react'

export default class DoneList extends Component {
    render() {
        
        const doneItems = this.props.projectsComplete.map(project => 
            <li onClick={()=> {this.props.handleShowCard(project)}}> {project.name} </li>)

        
        return (
            <div style={{border: '1px pink solid'}}>
                <h2>Completed Project Name: </h2>
                <br />
                <h2>
                {doneItems}
                </h2>
            </div>
        )
    }
}
