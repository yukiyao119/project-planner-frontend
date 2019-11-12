import React, { Component } from 'react';
import NoteForm from './NoteForm.js'

export default class NoteCard extends Component {

    render() {

        const { allNotesArr, filterProjectNotes } = this.props
        const filteredNotes = filterProjectNotes(allNotesArr)

        const noteItems = filteredNotes.map(note => 
        <React.Fragment key={note.id}>
            <li className="ui item" key={note.id} id={note.id}> 
                {note.content}   
                <button key={note.id} id={note.id}
                className="ui mini icon button"
                onClick={()=> {this.props.handleDelete(note)}}
                ><i aria-hidden="true" className="ui delete icon"></i>
                    {/* Delete this note */}
                </button>
            </li>
            
        </React.Fragment>)

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
