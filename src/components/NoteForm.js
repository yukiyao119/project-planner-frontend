import React, { Component } from 'react'

export default class NoteForm extends Component {

    state = {
        content: '',
        user_id: 1,
        project_id: this.props.selected.id
    }

    handleContentChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
            // content: evt.target.value,
            // project_id: this.props.selected.id
        }, ()=>{console.log(this.state, {selected_id: this.props.selected.id})} )
    }

    handleNoteSubmit = (event) => {
        event.preventDefault()
        // console.log('handling note submitting')
        fetch( `http://localhost:3000/notes`, {
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
                // this.props.addToAllNotes(createdNote)
                this.props.addToNotes(createdNote)
            })

        this.setState({
            ...this.state,
            content: ''
        })

    }


    render() {

        return (
            <div >
                <h3 className="ui center aligned header purple" id="fonts">Add a new Note</h3>

                <form className="ui form" onSubmit={this.handleNoteSubmit}>
                    <div className="ui field">
                        <input label="content" placeholder="Write down your note..." 
                        name="content" 
                        autoComplete="off"
                        value={this.state.content} 
                        onChange={this.handleContentChange}
                        />
                    </div>
                    <button className="ui right button">Submit</button>
                </form>
            </div>
        )
    }
}
