import React, { Component } from 'react'

export default class EditProjectForm extends Component {

    state = {
        name: '',
        details: '',
        done: false,
        user_id: 1
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        }, ()=>{console.log(this.state)})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        // console.log(this.props);
        
        fetch(`http://localhost:3000/projects/${this.props.selected.id}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.state.name,
              details: this.state.details,
              done: false,
              user_id: 1
            })
          })
          .then(res => res.json())
          .then(updatedProject => {
            //   console.log(updatedProject)
              this.props.addUpdatedToAll(updatedProject)
          })

        this.setState({
            ...this.state, 
            name: "",
            details: ""
        })

    }

    render() {
        return (
            <div style={{border: "1px grey solid"}}>
                <h2>Edit project form</h2>
                
                <form onSubmit={this.handleSubmit}>
                
                <input label="Name" placeholder="Project Name" name="name" 
                autoComplete="name"
                value={this.state.name} 
                onChange={this.handleChange}/>
                
                <input label="Details" placeholder="Project Details" name="details" 
                autoComplete="details"
                value={this.state.details} 
                onChange={this.handleChange}/>

                <button>Submit</button>
                
            </form>
            </div>
        )
    }
}
