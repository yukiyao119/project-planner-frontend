import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';
import ProjectForm from '../components/ProjectForm';
import DoneList from './DoneList';
// import { log } from 'util';
const heroku = "https://stormy-ocean-97302.herokuapp.com/"
const localhost = "http://localhost:3000/"
export default class BodyContainer extends Component {

    state ={
        projectsArr: [],
        user_id: 1,
        selected: {},
        projectsComplete: []
    }

    componentDidMount(){
//         fetch("http://localhost:3000/projects")
        fetch(`${localhost}projects`)
        .then(res => res.json())
        .then( projectsData => {
            const completed = [...projectsData].filter(project => project.done === true)
            const unCompleted = [...projectsData].filter(project => project.done !== true)
            this.setState({
                projectsArr: unCompleted,
                projectsComplete: completed
            })
        })
    }

    
    // ADD NEW PROJECT TO ALL
    addToAll = (createdProject) => {
        // console.log("adding");
        this.setState({
            projectsArr: [...this.state.projectsArr, createdProject]
        })
    }

    // ADD UPDATED PROJECT TO ALL
    addUpdatedToAll = (updatedProject) => {
        console.log("adding updatedProject to all, changing selected to updatedProject")
        const updatedProjectsArr = [...this.state.projectsArr].map(project => {
            if (project.id === updatedProject.id) {
                return updatedProject
            }
            return project
        })

        this.setState({
            projectsArr: updatedProjectsArr,
            selected: updatedProject
        }, ()=> {console.log(this.state.projectsArr)})
    }

    // MOVE PROJECT TO DONELIST
    handleDone = (project) => {
        
        const projectsComplete = this.state.projectsComplete
        const newProjectsArr = this.state.projectsArr.filter( curProject => {
            return curProject !== project
        })

        if (!projectsComplete.includes(project)) {
            fetch(`${localhost}projects/${this.state.selected.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify({
                    done: true
                })
              })
            .then(res => res.json())
            .then( updatedSelected => {
                this.setState({
                    selected: updatedSelected,
                    projectsComplete: [...projectsComplete, updatedSelected],
                    projectsArr: newProjectsArr
                }, ()=> {console.log("all completed arr", this.state.projectsArr)})
            })
        }
    }

    //CLICK TO SHOW PROJECT CARD
    handleShowCard = (project) => {
        this.setState({
            selected: project
        })
    }

    //ADD NOTES
    addToNotes = (newNote) => {
        console.log("what are new notes", newNote)
        const project = this.state.projectsArr.find ((projects) => {
            return projects.id === newNote.project.id
        })
        const updateProject = {...project, notes: [...project.notes, newNote]}
        const newProjectArr = this.state.projectsArr.map((project) => {
            return project.id === updateProject.id ? updateProject : project
        })
        this.setState({
            projectsArr: newProjectArr,
            selected: {...this.state.selected, notes: [...this.state.selected.notes, newNote]}
        })
    }

    deleteNote = (noteObj) => {
        fetch(`${localhost}notes/${noteObj.id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then( (deletedNote) => {
            const remainingNotes = this.state.selected.notes.filter( (deletedNote) => {
                return noteObj !== deletedNote
            })
            //find the project of the deleted note.
            const project = this.state.projectsArr.find ((projectObj) => {
                return deletedNote.project.id === projectObj.id
            })

            //filter the project notes to remove the deleted note
            const filteredNotes = project.notes.filter( (removeNote) => {
                return removeNote.id !== deletedNote.id
            })

            //update the project with new notes
            const updatedProject = {...project, notes: filteredNotes}
            
            //create a new array of project with updated 
            const newProjectsArr = this.state.projectsArr.map ( (project) => {
                return project.id === updatedProject.id ? updatedProject : project
            })

            this.setState({
                projectsArr: newProjectsArr,
                selected: {...this.state.selected, notes: remainingNotes}
            })
        })
    }

    

    render() {
        console.log("what is projects",this.state.projectsArr)
        return (

            <React.Fragment>
                
                <div className="ui padded equal width grid">
                    <div className="eight wide column">
                        <div className="ui segment">
                            <ProjectList 
                            handleShowCard={this.handleShowCard}
                            projects={this.state.projectsArr}
                            />
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="ui segment">
                            <ProjectForm 
                            addToAll={this.addToAll}
                            />
                        </div>
                    </div>

                    <div className="four wide column">
                        <div className="ui segment">
                            <DoneList
                            handleShowCard={this.handleShowCard}
                            selected = {this.state.selected}
                            projectsComplete={this.state.projectsComplete}
                            />
                        </div>
                    </div>

                </div>
            
                <div className="ui fluid container">
                {Object.keys(this.state.selected).length === 0 ?  
                    null
                    :
                    <div >
                    <ProjectCard 
                    // handleReverse={this.handleReverse}
                    addToNotes={this.addToNotes}
                    selected={this.state.selected}
                    addUpdatedToAll={this.addUpdatedToAll}
                    handleDone={this.handleDone}
                    deleteNote={this.deleteNote}/>
                    
                    </div>
                }
                </div>
            </React.Fragment>
        )

    }
}
