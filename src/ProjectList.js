import React, { Component } from 'react'

export default class ProjectList extends Component {

    
    render() {


        const projectsItem = this.props.projects.map(project => <li onClick={() => this.props.handleShowCard(project)}>{project.name}</li>)

        return (
            <div style={{border: '1px pink solid'}}>
                <h2>Project List: </h2>
                <br />
                <h2>
                {projectsItem}
                </h2>
            </div>
        )
    }
}
