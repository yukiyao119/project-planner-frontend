import React, { Component } from 'react'

export default class ProjectForm extends Component {

    state = {
        name: '',
        details: '',
        user_id: 1
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, ()=>{console.log(this.state)})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/projects', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.state.name,
              details: this.state.details,
              user_id: 1
            })
          })
          .then(res => res.json())
          .then(createdProject => {
              console.log(createdProject)
              this.props.addToAll(createdProject)
          })
    }


    render() {
        return (
            <div className="project-form">
                <h2>Project Form</h2>
                
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input  label="Name" placeholder="Project Name" name="name" 
                            value={this.state.name} 
                            onChange={(e) => this.handleChange(e)}/>
                    
                    <input label="Details" placeholder="Project Details" name="details" 
                           value={this.state.details} 
                           onChange={(e) => this.handleChange(e)}/>
                    <button>Submit</button>  
                </form>
            </div>
        )
    }
}
