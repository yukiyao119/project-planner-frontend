import React, { Component } from 'react';
import NoteForm from '../components/NoteForm'

export default class NoteCard extends Component {

    render() {
        console.log("NOTE CARD", this.props.selected)
        const {selected} = this.props
        // const {allNotesArr, filterProjectNotes, selected} = this.props
        // const filteredNotes = filterProjectNotes(allNotesArr)

        const noteItems = selected.notes.map(note => 
        <React.Fragment key={note.id}>
            <p key={note.id} id={note.id} className="noteStyle"> 
                {note.content}   
                <button key={note.id} id={note.id}
                className="ui mini icon button"
                onClick={()=> {this.props.deleteNote(note)}}
                > <i aria-hidden="true" className="ui remove icon"></i>
                </button>
            </p>
            
        </React.Fragment>)

        return (
            

            <div >
                <h3 className="ui center aligned header purple" id="fonts">Note board</h3>
                
                <ol className="ui list">
                    {noteItems}
                </ol>

                <NoteForm 
                addToNotes={this.props.addToNotes}
                addToAllNotes={this.props.addToAllNotes}
                selected={this.props.selected}
                />
            </div>
        )
    }
}
