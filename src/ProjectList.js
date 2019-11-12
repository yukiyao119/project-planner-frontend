import React, { Component } from 'react'


export default class ProjectList extends Component {

    render() {
        console.log('zermina', this.props)
       const searchProject = this.props.projects.filter( (projects) => {
           console.log(projects.name)
           return projects.name.includes(this.props.projects)
       }
       )
        
        return (
            <div style={{border: '1px pink solid'}}>
            
               
                <h2>Project List: </h2>
                <br />
                <h2>
                {searchProject.map( project => {
                    return <li onClick={() => this.props.handleShowCard(project)}>{project.name}</li>
                })}
                </h2>

            </div>
        )
    }
}
