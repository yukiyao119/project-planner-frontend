import React, { Component } from 'react';
import NoteCard from './NoteCard';
import EditProjectForm from './EditProjectForm'

export default class ProjectCard extends Component {

   

  

    render() {
        console.log("brian wong", this.props)
        return (

            <div style={{border: '2px red solid'}}>
                <h2>Im Project Card</h2>
                <br />
                <h2>Project Name: {this.props.selected.name}</h2>
                <br />
                Project Details: {this.props.selected.details}
                <br />
                <EditProjectForm selected={this.props.selected} editProject={this.props.editProject}/>
                <NoteCard />
                <button onClick={()=> this.props.handleDone(this.props.selected)}>Complete</button>
                
            </div>

        )
    }
}
