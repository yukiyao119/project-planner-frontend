import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import DoneList from './DoneList';
// import { log } from 'util';

export default class BodyContainer extends Component {

    state ={ 
        projectsArr: [],
        user_id: 1,
        clicked: false,
        selected: {},
        projectsComplete: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/projects")
        .then(res => res.json())
        .then( projectsData => {
            // console.log("PROJECTARRAY", projectsData)
            this.setState({
                projectsArr: projectsData
            })
        })
    }

    addToAll = (createdProject) => {
        // console.log("adding");
        this.setState({
            projectsArr: [...this.state.projectsArr, createdProject]
        })
    }

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

    //PROJECT DONE
    handleDone = (project) => {
        // console.log("HELLO", this.state.projectsComplete)
        const projectsComplete = this.state.projectsComplete
        const newProjectsArr = this.state.projectsArr.filter( curProject => {
            return curProject !== project
        })

        if (!projectsComplete.includes(project)) {
            this.setState({
                projectsComplete: [...projectsComplete, project],
                projectsArr: newProjectsArr
            }, ()=>{ console.log(this.state.projectsArr)})
        }
    }


    //PROJECT SHOW CARD
    handleShowCard = (project) => {
        this.setState({
            // clicked: !this.state.clicked,
            selected: project
        })
    }

    
    render() {

        return (
            <div style={{border: '2px blue solid'}}>
                <ProjectList 
                handleShowCard={this.handleShowCard}
                projects={this.state.projectsArr}
                />

                <ProjectForm 
                addToAll={this.addToAll}
                />

                <DoneList
                handleShowCard={this.handleShowCard}
                selected = {this.state.selected}
                projectsComplete={this.state.projectsComplete}/>
                
                
                {Object.keys(this.state.selected).length === 0 ?  
                    null
                    :
                    <ProjectCard 
                    selected={this.state.selected}
                    addUpdatedToAll={this.addUpdatedToAll}
                    handleDone={this.handleDone}/>
                } 

            </div>
        )


    }
}
