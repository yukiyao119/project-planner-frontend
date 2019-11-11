import React, { Component } from 'react'

export default class NoteForm extends Component {

    state = {
        content: '',
        user_id: 1,
        project_id: null
    }

    handleContentChange = (evt) => {
        this.setState({
            content: evt.target.value,
            project_id: this.props.selected.id
        }, ()=>{console.log(this.state)} )
    }

    handleNoteSubmit = (event) => {
        event.preventDefault()
        
        console.log('handling note submitting')
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: this.state.content,
                user_id: this.state.user_id,
                project_id: this.props.selected.id
            })
        })
            .then(res => res.json())
            .then(createdNote => {
                this.props.addToAllNotes(createdNote)
            })

        this.setState({
            ...this.state,
            content: ''
        })

    }


    render() {

        return (
            <div style={{border: "1px green solid"}}>
                <h3>New Note form</h3>

                <form onSubmit={this.handleNoteSubmit}>
                    <input placeholder="Write down your note..." 
                    name="content" 
                    autoComplete="content"
                    value={this.state.content} 
                    onChange={this.handleContentChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
