import React, { Component } from 'react'
const heroku = "https://stormy-ocean-97302.herokuapp.com/"
const localhost = "http://localhost:3000/"
export default class EditProjectForm extends Component {

    state = {
        name: '',
        details: ''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        }, ()=>{console.log(this.state)})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
    
        const id = this.props.selected.id
        fetch(`${heroku}projects/${id}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.state.name,
              details: this.state.details
            })
          })
          .then(res => res.json())
          .then(updatedProject => {
              console.log("updated", updatedProject)
              this.props.addUpdatedToAll(updatedProject)
            // this.props.editProject(updatedProject)
          })

        this.setState({
            ...this.state, 
            name: "",
            details: ""
        })

    }

    render() {
        return (
            <div >
                <h2 className="ui center aligned header purple" id="fonts">Edit project</h2>
                
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

                {/* <button type="button"
                    className="ui button"
                    onClick={ this.props.handleReverse}
                    >Reverse</button> */}

            </div>
        )
    }
}
