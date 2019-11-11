import React, { Component } from 'react';
import NoteForm from './NoteForm.js'

export default class NoteCard extends Component {


    render() {

    const { allNotesArr, filterProjectNotes } = this.props
    
    const filteredNotes = filterProjectNotes(allNotesArr)

    const noteItems = filteredNotes.map(note => 
        <li key={note.id}>
            {note.content} 
        </li>)

        return (
            <div style={{border: '1px red solid'}}>
                <h2>Note board</h2>
                
                <ol>
                    Hello Notes
                    {noteItems}
                </ol>

                <NoteForm 
                addToAllNotes={this.props.addToAllNotes}
                selected={this.props.selected}
                />
            </div>
        )
    }
}
