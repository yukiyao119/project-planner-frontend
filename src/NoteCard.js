import React, { Component } from 'react';
import NoteForm from './NoteForm.js'

export default class NoteCard extends Component {
    render() {
        return (
            <div style={{border: '1px red solid'}}>
                Im A Note Card
                <NoteForm />
            </div>
        )
    }
}
