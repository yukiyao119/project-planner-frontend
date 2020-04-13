import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import DoneList from './DoneList';
// const localhost = "http://localhost:3000/"
const heroku = "https://stormy-ocean-97302.herokuapp.com/"

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
            this.setState({
                projectsArr: projectsData
            })
        })
    }

    
    //PROJECT SHOW CARD
    handleShowCard = (project) => {
        this.setState({
            selected: project
        })
    }
    //CREATE PROJECT FORM
    addToAll = (createdProject) => {
        this.setState({
            projectsArr: [...this.state.projectsArr, createdProject]
        })
    }
    
    //EDIT PROJECT FORM
    editProject = (newProject) => {
        const newArray = this.state.projectsArr.filter(project => project.id !== newProject.id)
        
        this.setState({
            ...this.state,
            projectsArr: [...newArray, newProject],
            selected: newProject
        })
    }
    
    //PROJECT DONE
    handleDone = (project) => {
        
        console.log(project)
        const projectsComplete = this.state.projectsComplete
        const newProjectsArr = this.state.projectsArr.filter( curProject => {
            return curProject.id !== project.id
        })

        if (!projectsComplete.includes(project)) {
            this.setState({
                projectsComplete: [...projectsComplete, project],
                projectsArr: newProjectsArr
            }, ()=>{ console.log(this.state.projectsArr)})
        }
    }

    

   
   
    
    
    render() {
    
        return (
            <React.Fragment>
                <div className="border">
                <div className="ui padded equal width grid">
                    <div className="side-bar">
                        <div className="eight wide column">
                            <div className="ui segment">
                                <ProjectList projects={this.state.projectsArr}
                                            handleShowCard={this.handleShowCard}
                                            sortArray={this.sortArray}
                                            />  
                            </div>
                            <div className="ui segment">
                                <DoneList handleShowCard={this.handleShowCard}
                                        selected={this.state.selected}
                                        projectsComplete={this.state.projectsComplete}/>
                            
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="project-card-container">
                    <div className="project-card">
                       
                            {this.state.selected.length === 0 ?  
                                    null
                                    :
                                <div>
                                    <ProjectCard selected={this.state.selected}
                                                editProject={this.editProject} 
                                                handleDone={this.handleDone}
                                            
                                                // deleteNote={this.deleteNote}
                                                />
                                    
                                </div>
                            } 
                        
                    </div>
                </div>
                </div>
                <div className="four wide column">
                        <div className="ui segment">
                            <ProjectForm addToAll={this.addToAll}/>
                        </div>
                </div>
            </React.Fragment>
        )


    }
}
