import React, { Component } from 'react'

export default class ProjectForm extends Component {

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

        fetch('http://localhost:3000/projects', {
            method: "POST",
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
          .then(createdProject => {
            //   console.log(createdProject)
              this.props.addToAll(createdProject)
          })

        this.setState({
            ...this.state, 
            name: "",
            details: ""
        })
    }


    render() {

        return (
            <div className="column" style={projectFormStyle}>
                <h2>New Project Form</h2>

                <div className="tile">
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

            </div>
        )
    }
}

const projectFormStyle = {
    border: '1px pink solid',
    margin: '20px 5px 20px 5px'
}
