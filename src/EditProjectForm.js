import React, { Component } from 'react'

export default class EditProjectForm extends Component {
    state = {
        name: "",
        details: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
        // console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const id = this.props.selected.id
        fetch(`http://localhost:3000/projects/${id}`, {
            method: "PATCH",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                name: this.state.name,
                details: this.state.details
            })
        })
        .then(res => res.json())
        .then(projObj => {
            this.props.editProject(projObj)
        })
    }
    render() {
        // console.log("edit form", this.props)
        return (
            <div>
                <h5>Edit Project</h5>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input  label="name" placeholder="Project Name" name="name"
                            value={this.state.name}
                            onChange={this.handleChange}/>
                    <br></br>
                    <input  label="details" placeholder="Project Details" name="details"
                            value={this.state.details}
                            onChange={this.handleChange}
                            />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
