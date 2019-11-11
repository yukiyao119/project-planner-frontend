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
    ///EDIT PROJECT FORM
    editProjectRender = (newProject) => {
        const newArray = this.state.projectsArr.filter(project => project.id !== newProject.id)
        //if this condition is true it will return a new array with the project taken out
        console.log(this.state.projectsArr)
        // [1,2,3,4,5] [5]
        // [1,2,3,4]
        
        this.setState({
            ...this.state,
            projectsArr: [...newArray, newProject]
        })
    }

    addToAll = (createdProject) => {
        // console.log("adding",createdProject);
        // console.log("projectsArr", this.state.projectsArr)
        this.setState({
            projectsArr: [...this.state.projectsArr, createdProject]
        }, ()=> {console.log(this.state.projectsArr)})
    }
    //ADD TO PROJECT
     

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

        // console.log("HELLO", this.state)
        // console.log("OBJECT" , Object.prototype)
        console.log(this.state.selected)
        
  
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
                selected={this.state.selected}
                projectsComplete={this.state.projectsComplete}/>
                
                {this.state.selected.length === 0 ?  
                    null
                    :
                    <ProjectCard 
                    editProject={this.editProjectRender}
                    selected={this.state.selected} 
                    handleDone={this.handleDone}/>
                } 

            </div>
        )


    }
}
