import React, { Component } from 'react';
import NoteCard from './NoteCard';
import EditProjectForm from './EditProjectForm'

export default class ProjectCard extends Component {

    state = {
        allNotesArr: []
    }

    addToAllNotes = (createdNote) => {
        this.setState({
            allNotesArr: [...this.state.allNotesArr, createdNote]
        }, ()=> {console.log("all notes array now", this.state.allNotesArr)})
    }
    
    filterProjectNotes = (notes) => {
        return notes.filter(note => {
            return note.project.id === this.props.selected.id
        })
    }

    componentDidMount(){
        fetch("http://localhost:3000/notes")
        .then(res => res.json())
        .then( notesData => {
            // console.log("all notes arr", notesData)
            this.setState({
                allNotesArr: notesData
            }, ()=> {console.log("all notes arr", this.state.allNotesArr)})
        })


    }

    
    render() {

        console.log(this.props.selected);
        
        return (

            <React.Fragment>
            <div className="ui cards">
                <div className="ui red fluid card" style={cardStyle}>

                    <div className="content">
                        <h2 className="ui center aligned header purple">Project Card</h2>
                        <div className="ui header">Project Name: {this.props.selected.name}</div>
                        <div className="description">Project Details: {this.props.selected.details}</div>
                    </div>
                    <div className="extra content">
                        <div className="ui buttons">
                            <button className="ui green basic button"
                                // style={btnStyle} 
                                onClick={()=> this.props.handleDone(this.props.selected)}>
                                    Complete
                            </button>
                        </div>
                    </div>

                    
                    <div className="ui padded equal width grid">

                        <div className="ten wide column">
                            <div className="ui segment">
                            <NoteCard 
                            addToAllNotes={this.addToAllNotes}
                            allNotesArr={this.state.allNotesArr}
                            filterProjectNotes={this.filterProjectNotes}
                            selected={this.props.selected}
                            />
                            </div>
                        </div>

                        <div className="five wide column">
                            <div className="ui segment">
                            <EditProjectForm 
                            selected={this.props.selected}
                            addUpdatedToAll={this.props.addUpdatedToAll}
                            />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </React.Fragment>

        )
    }
}

// const btnStyle = {
//     background: '#99B024',
//     color: '#fff',
//     border: 'none',
//     padding: '5px 9px',
//     // borderRadius: '50%',
//     cursor: 'pointer',
//     // float: 'right'
// }

const cardStyle = {
    border: '1px pink solid',
    margin: '20px'
}
