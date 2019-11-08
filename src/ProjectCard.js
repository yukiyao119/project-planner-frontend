import React, { Component } from 'react';
import NoteCard from './NoteCard';
import EditProjectForm from './EditProjectForm'

export default class ProjectCard extends Component {

    render() {
        console.log("brian wong", this.props)
        return (
            <div style={{border: '1px pink solid'}}>
                Im Project Card
                <br />
                Project Name: {this.props.selected.name}
                <br />
                Project Details: {this.props.selected.details}
                <br />
                <EditProjectForm />
                <button onClick={()=> this.props.handleDone(this.props)}>Complete</button>
                <NoteCard />
            </div>
        )
    }
}
