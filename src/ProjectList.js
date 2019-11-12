import React, { Component } from 'react'


export default class ProjectList extends Component {

    render() {
       
    //    const searchProject = this.props.projects.filter( (projects) => {
           
    //        return projects.name.includes(this.props.projects)
    //    }
    //    )
        
        return (
            <div style={{border: '1px pink solid'}}>
                
               
                <h2>Project List: </h2>
                <br />
                <h2>
                {this.props.projects.map( project => {
                    return <li onClick={() => this.props.handleShowCard(project)}>{project.name}</li>
                })}
                </h2>

            </div>
        )
    }
}
