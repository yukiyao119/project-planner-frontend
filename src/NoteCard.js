import React, { Component } from 'react';
import NoteForm from './NoteForm.js'


export default class NoteCard extends Component {

    mapNotes = () => {
        return (
        <ol>
         {this.props.selected.notes.map( note => {
             return <li>{note.content}
                        <button onClick={()=> this.props.deleteNote(note)}>Delete</button>
                    </li>
           })}
       </ol>
     )
    }

    render() {
   
    
        return (
            <div style={{border: '1px red solid'}}>
                Note Card:
                { this.props.selected.notes ? this.mapNotes() : " "}
                
                <NoteForm selected={this.props.selected} 
                          addToNotes={this.props.addToNotes}
                          /> 
            </div>
        )
    }
}
