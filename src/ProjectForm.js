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
        // console.log('form submitted!',evt);
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
              console.log(createdProject);
              this.props.addToAll(createdProject)
          })
    }


    render() {
        return (
            <div style={{border: '1px pink solid'}}>
                <h2>Im Project Form</h2>
                
                <form onSubmit={this.handleSubmit}>
                
                    <input label="Name" placeholder="Project Name" name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/>
                    
                    <input label="Details" placeholder="Project Details" name="details" 
                    value={this.state.details} 
                    onChange={this.handleChange}/>

                    <button>Submit</button>
                    
                </form>
            </div>
        )
    }
}
