import React, { Component } from 'react';
import NoteCard from './NoteCard';
import EditProjectForm from './EditProjectForm'


export default class ProjectCard extends Component {

    render() {
        
        return (

            <div className="project-card-comp">
                
                    
                        <h1>Project Card</h1>
                        
                        <h2>Project Name: {this.props.selected.name}</h2>
                        
                        Project Details: {this.props.selected.details}
                        
                        <EditProjectForm    selected={this.props.selected} 
                                            editProject={this.props.editProject}
                                            />

                        <NoteCard           selected={this.props.selected} 
                                            addToNotes={this.props.addToNotes} 
                                            deleteNote={this.props.deleteNote}
                                            />
                        <button onClick={()=> this.props.handleDone(this.props.selected)}>Complete</button>
                    
                
            </div>

        )
    }
}
