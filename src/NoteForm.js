import React, { Component } from 'react'

export default class NoteForm extends Component {

    state = {
        content: "",
        user_id: 1,
        project_id: this.props.selected.id
    }

    handleChangeNotes = (evt) => {
        // console.log("I have been clicked Noets", evt.target.value)
        this.setState({
            [evt.target.name]: evt.target.value
        })
        // console.log("handleChangeNotes", this.state)
    }

    handleNoteSubmit = (evt) => {
        evt.preventDefault()
        console.log("id", this.props.selected.id)
        fetch("http://localhost:3000/notes", {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                content: this.state.content,
                user_id: this.state.user_id,
                project_id: this.props.selected.id
                // project_id: this.state.project_id
            })
        })
        .then(res => res.json())
        .then(createdNote => {
            console.log("cREATED NOTE", createdNote)
            this.props.addToNotes(createdNote)
        })
        
    }
    render() {
    //     console.log("WHAT IS THIS.PROPS.SELECTED", this.props.selected)
    //     console.log("this.state", this.state.project_id)
        return (
            <div style={{border: "1px green solid"}}>
                I AM NOTE FORM

                <form onSubmit={this.handleNoteSubmit}>
                    <input label="notes" placeholder="note" name="content"
                    value={this.state.content}
                    onChange={this.handleChangeNotes}/>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
