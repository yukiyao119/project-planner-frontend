import React, { Component } from 'react';
import NoteForm from './NoteForm.js'


export default class NoteCard extends Component {

    mapNotes = () => {
        return (
        <div>
            <ol>
            {this.props.selected.notes.map( note => {
                return <li>
                            <p>{note.content}</p>
                            <button onClick={()=> this.props.deleteNote(note)}>Delete</button>
                        </li>
            })}
        </ol>
       </div>
     )
    }

    render() {
   
    
        return (
            <div style={{border: '1px red solid'}}>
                Notes/To Do: 
                { this.props.selected.notes ? this.mapNotes() : " "}
                
                <NoteForm selected={this.props.selected} 
                          addToNotes={this.props.addToNotes}
                          /> 
            </div>
        )
    }
}
