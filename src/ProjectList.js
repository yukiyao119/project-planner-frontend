import React, { Component } from 'react'

export default class ProjectList extends Component {

    
    render() {


        const projectsItem = this.props.projects.map(project => 
            <li key={project.id}
                onClick={() => this.props.handleShowCard(project)}>
                    {project.name}
            </li>)

        return (
            // 
            <div className="column" style={listStyle}>
                <h2>Project List: </h2>
                <br />
                <h2>
                {projectsItem}
                </h2>
            </div>
        )
    }
}

const listStyle = {
    border: '1px pink solid',
    margin: '20px 5px 20px 20px'
}