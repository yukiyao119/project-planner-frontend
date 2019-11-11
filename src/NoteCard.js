import React, { Component } from 'react';
import NoteForm from './NoteForm.js'


export default class NoteCard extends Component {

    render() {
        
    const noteItems = this.props.thisProjectNotes.map(note => {
        return <li key={note.id}>
                    {note.content}</li>
                    
    })
        return (
            <div style={{border: '1px red solid'}}>
                Im A Note Card
                <ol>{noteItems}</ol>
                <NoteForm selected={this.props.selected} 
                        addToNotes={this.props.addToNotes}
                        />
                
            </div>
        )
    }
}
