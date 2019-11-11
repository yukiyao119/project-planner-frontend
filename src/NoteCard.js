import React, { Component } from 'react';
import NoteForm from './NoteForm.js'

export default class NoteCard extends Component {

    render() {

    const noteItems = this.props.thisProjectNotes.map(note => 
        <li key={note.id}>
            {note.content} 
        </li>)

        return (
            <div style={{border: '1px red solid'}}>
                <h2>Note board</h2>
                <ol>
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
