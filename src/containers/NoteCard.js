import React, { Component } from 'react';
import NoteForm from '../components/NoteForm'

export default class NoteCard extends Component {

    render() {

        const { allNotesArr, filterProjectNotes } = this.props
        const filteredNotes = filterProjectNotes(allNotesArr)

        const noteItems = filteredNotes.map(note => 
        <React.Fragment key={note.id}>
            <p key={note.id} id={note.id} className="noteStyle"> 
                {note.content}   
                <button key={note.id} id={note.id}
                className="ui mini icon button"
                onClick={()=> {this.props.handleDelete(note)}}
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
                addToAllNotes={this.props.addToAllNotes}
                selected={this.props.selected}
                />
            </div>
        )
    }
}
