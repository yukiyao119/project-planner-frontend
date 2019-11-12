import React, { Component } from 'react'

export default class DoneList extends Component {
    render() {
        
        const doneItems = this.props.projectsComplete.map(project => 
            <li key={project.id} onClick={()=> {this.props.handleShowCard(project)}}> 
                {project.name}
            </li>)

        
        return (

            <div style={doneListStyle}>
                <h2 className="ui header purple">Completed Project List:</h2>
                <h2>
                {doneItems}
                </h2>
            </div>
        )
    }
}

const doneListStyle = {
    // border: '1px pink solid',
    margin: '20px 20px 20px 5px'
    
}