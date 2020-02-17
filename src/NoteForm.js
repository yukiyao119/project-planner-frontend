import React, { Component } from 'react'
const localhost = "http://localhost:3000/"
const heroku = "https://stormy-ocean-97302.herokuapp.com/"
export default class NoteForm extends Component {

    state = {
        content: "",
        user_id: 1,
        project_id: this.props.selected.id
    }

    handleChangeNotes = (e) => {
        // console.log("I have been clicked Noets", evt.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log("handleChangeNotes", this.state)
    }

    handleNoteSubmit = (e) => {
        e.preventDefault()
        fetch(`${heroku}notes`, {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                content: this.state.content,
                user_id: this.state.user_id,
                project_id: this.props.selected.id
            })
        })
        .then(res => res.json())
        .then(createdNote => {
            this.props.addToNotes(createdNote)
        })
        
    }
    render() {
        return (
            <div>
                NOTE FORM:

                <form onSubmit={(e) => this.handleNoteSubmit(e)}>
                    <input label="notes" placeholder="note" name="content"
                    value={this.state.content}
                    onChange={this.handleChangeNotes}/>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
