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



    render() {
        // console.log("brian wong", this.state.notes)
        console.log("selceted",this.props)
        // const thisProjectNotes = this.state.notes.filter(note => {return note.project.id === this.props.selected.id})

        return (

            <div style={{border: '2px red solid'}}>
                <h2>Im Project Card</h2>
                <br />
                <h2>Project Name: {this.props.selected.name}</h2>
                <br />
                Project Details: {this.props.selected.details}
                <br />
                <EditProjectForm handleYell={this.props.handleYell} selected={this.props.selected} editProject={this.props.editProject}/>
                <NoteCard selected={this.props.selected} 
                        //   notes={this.state.notes} 
                          addToNotes={this.addToNotes} 
                        //   thisProjectNotes={thisProjectNotes}
                          />
                <button onClick={()=> this.props.handleDone(this.props.selected)}>Complete</button>
                
            </div>

        )
    }
}
