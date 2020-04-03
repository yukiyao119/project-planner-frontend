import React, { Component } from 'react'
const heroku = "https://stormy-ocean-97302.herokuapp.com/"
const localhost = "http://localhost:3000/"
export default class ProjectForm extends Component {

    state = {
        name: '',
        details: '',
        user_id: 1
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        }, ()=>{console.log(this.state)})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()

        fetch(`${heroku}projects`, {
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
            <div style={projectFormStyle}>
                <h2 className="ui center aligned header purple" id="fonts">Add a new project</h2>
                
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input label="Name" placeholder="Project Name" name="name" 
                        autoComplete="name"
                        value={this.state.name} 
                        onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <textarea placeholder="Tell us more details..." 
                        autoComplete="details" rows="3"
                        name="details"
                        value={this.state.details} 
                        onChange={this.handleChange}/>
                    </div>
                    <button className="ui button">Submit</button>
                    
                </form>
                

            </div>
        )
    }
}

const projectFormStyle = {
    // border: '1px pink solid',
    margin: '20px 5px 20px 5px'
}
