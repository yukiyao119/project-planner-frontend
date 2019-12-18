import React, { Component } from 'react'


export default class ProjectList extends Component {

    
    render() {
    console.log(this.props.projects)
        return (
            <div>
                
                <h2>Project List: </h2>
                <br />
                <h2>{this.props.projects.map( project => {
                    return <li onClick={() => this.props.handleShowCard(project)}>{project.name}</li>})}
                </h2>
                
            </div>
        )
    }
}
