import React, { Component } from 'react';
import NoteCard from './NoteCard';

import EditProjectForm from './EditProjectForm'

export default class ProjectCard extends Component {

   state = {
       notes: []
   }


  addToNotes = (notes) => {
      this.setState({
          notes: [...this.state.notes, notes]
      })
  }

    componentDidMount(){
        fetch("http://localhost:3000/notes")
        .then(res => res.json())
        .then((notesArray) => {
            this.setState({
                notes: notesArray
            })
        })
    }


    render() {
        console.log("brian wong", this.props.selected)
        const thisProjectNotes = this.state.notes.filter(note => {return note.project.id === this.props.selected.id})

        return (

            <div style={{border: '2px red solid'}}>
                <h2>Im Project Card</h2>
                <br />
                <h2>Project Name: {this.props.selected.name}</h2>
                <br />
                Project Details: {this.props.selected.details}
                <br />
                <EditProjectForm selected={this.props.selected} editProject={this.props.editProject}/>
                <NoteCard selected={this.props.selected} 
                          notes={this.state.notes} 
                          addToNotes={this.addToNotes} 
                          thisProjectNotes={thisProjectNotes}
                          />
                <button onClick={()=> this.props.handleDone(this.props.selected)}>Complete</button>
                
            </div>

        )
    }
}
