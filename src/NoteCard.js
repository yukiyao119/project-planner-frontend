import React, { Component } from 'react';
import NoteForm from './NoteForm.js'

export default class NoteCard extends Component {

    render() {

        const { allNotesArr, filterProjectNotes } = this.props
        const filteredNotes = filterProjectNotes(allNotesArr)

        const noteItems = filteredNotes.map(note => 
            <li className="ui item" key={note.id}> {note.content} </li>)

        return (

            <div >
                <h3 className="ui center aligned header purple">Note board</h3>
                
                <ol className="ui list">
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
