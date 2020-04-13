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

        fetch(`${heroku}projects`)
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

    
    // CREATE A NEW PROJECT AND ADD IT TO ALL
    addToAll = (createdProject) => {
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

    //EDIT PROJECT FORM
      editProject = (newProject) => {
          const newArray = this.state.projectsArr.filter((project) => {
              return project.id !== newProject.id
          })

          this.setState({
              ...this.state,
              projectsArr: [...newArray, newProject],
              selected: newProject
          })
      }

    // MOVE PROJECT TO DONELIST
    handleDone = (project) => {
        
        const projectsComplete = this.state.projectsComplete
        const newProjectsArr = this.state.projectsArr.filter( curProject => {
            return curProject !== project
        })

        if (!projectsComplete.includes(project)) {
            fetch(`${heroku}projects/${this.state.selected.id}`, {
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
                    
                    selected={this.state.selected}
                    editProject={this.editProject}
                    addUpdatedToAll={this.addUpdatedToAll} 
                    handleDone={this.handleDone}
                    
                    />
                    
                    </div>
                }
                </div>
            </React.Fragment>
        )

    }
}
