import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import DoneList from './DoneList';

export default class BodyContainer extends Component {

    state ={ 
        projectsArr: [],
        user_id: 1,
        // projectsDone: []
        clicked: false,
        selected: {},
        projectsComplete: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/projects")
        .then(res => res.json())
        .then( projectsData => {
            console.log("PROJECTARRAY", projectsData)
            this.setState({
                projectsArr: projectsData
            })
        })
    }
    //PROJECT DONE
    handleDone = (project) => {
        console.log("HELLO", this.state.projectsComplete)
        const projectsComplete = this.state.projectsComplete
        if (!projectsComplete.includes(project)){
            this.setState({
                projectsComplete: [...projectsComplete, project]
            })
        } else { return null}
    }
    //PROJECT SHOW CARD

    handleShowCard = (project) => {
       
        this.setState({
            clicked: !this.state.clicked,
            selected: project
        })
    
    }

    
    render() {

        // console.log("HELLO", this.state.clicked)
  
        return (
            <div style={{border: '2px blue solid'}}>
                <ProjectList 
                handleShowCard={this.handleShowCard}
                projects={this.state.projectsArr}
                />
                <ProjectForm />

                <DoneList 
                selected = {this.state.selected}
                projectsComplete={this.state.projectsComplete}/>
                {
                this.state.clicked ?  
                <ProjectCard 
                selected={this.state.selected} 
                handleDone={this.handleDone}/>
                :
                null
                } 
            </div>
        )


    }
}
