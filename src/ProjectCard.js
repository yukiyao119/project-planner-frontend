import React, { Component } from 'react';
import NoteCard from './NoteCard';
import EditProjectForm from './EditProjectForm'

export default class ProjectCard extends Component {

    state = {
        allNotesArr: []
        // thisProjectNotes = []
    }

    addToAllNotes = (createdNote) => {
        this.setState({
            allNotesArr: [...this.state.allNotesArr, createdNote]
        }, ()=> {console.log("all notes array now", this.state.allNotesArr)})
    }

    componentDidMount(){
        fetch("http://localhost:3000/notes")
        .then(res => res.json())
        .then( notesData => {
            // console.log("all notes arr", notesData)
            this.setState({
                allNotesArr: notesData
            }, ()=> {console.log("all notes arr", this.state.allNotesArr)})
        })
    }

    
    render() {
        
        const thisProjectNotes = this.state.allNotesArr.filter(note => { return note.project.id === this.props.selected.id})


        return (

            <div style={cardStyle}>
                <h2>Im Project Card</h2>
                <br />
                <h2>Project Name: {this.props.selected.name}</h2>
                <br />
                Project Details: {this.props.selected.details}
                <br />
                <button 
                    style={btnStyle} 
                    onClick={()=> this.props.handleDone(this.props.selected)}>
                        Complete
                </button>

                <EditProjectForm 
                selected={this.props.selected}
                addUpdatedToAll={this.props.addUpdatedToAll}
                />

                <NoteCard 
                addToAllNotes={this.addToAllNotes}
                thisProjectNotes={thisProjectNotes}
                selected={this.props.selected}
                />
                
            </div>

        )
    }
}

const btnStyle = {
    background: '#99B024',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    // borderRadius: '50%',
    cursor: 'pointer',
    // float: 'right'
}

const cardStyle = {
    border: '1px red solid',
    margin: '20px'
}
