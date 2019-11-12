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
        selected: {},
        projectsComplete: [],
        
        
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
            projectsArr: [...newArray, newProject],
            selected: newProject
        })
    }
    
     //ADD TO PROJECT
    addToAll = (createdProject) => {
        this.setState({
            projectsArr: [...this.state.projectsArr, createdProject]
        })
        // console.log(this.state.projectsArr)
    }
    
     

    //PROJECT DONE
    handleDone = (project) => {
        // console.log("HELLO", this.state.projectsComplete)
        console.log(project)
        const projectsComplete = this.state.projectsComplete
        const newProjectsArr = this.state.projectsArr.filter( curProject => {
            console.log(curProject !== project)
            return curProject.id !== project.id
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
           
            selected: project
        })
    }

    addToNotes = (newNote) => {
        
        const project = this.state.projectsArr.find( (projects) => {
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

    deleteNote = (note) => {
        console.log("body container", note)
   
        fetch(`http://localhost:3000/notes/${note.id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then( (deletedNote) => {
            
            const remainingNotes = this.state.selected.notes.filter( deletedNote => {
                return note !== deletedNote
            })

         
            const project = this.state.projectsArr.find( (projectObj) => {
                return  deletedNote.project.id === projectObj.id
            } )
            //find the project of the deleted note. project.id === project id

            const fitleredNotes = project.notes.filter( (removeNote) => {
                return removeNote.id !== deletedNote.id
            })
            //filter the project notes to remove the deleted note
            const updatedProject = {...project, notes: fitleredNotes}
            //make a copy of the updated project
            const newProjectsArr = this.state.projectsArr.map( (project) => {
                return project.id === updatedProject.id ? updatedProject : project
            })
            //create a new array of projects with updated projects

            this.setState({
                projectsArr: newProjectsArr,
                selected: {...this.state.selected, notes: remainingNotes}
            })
        }
        )
        
        
    }
   
    
    render() {
        console.log("what is project id", this.state.projectsArr)
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
                    handleDone={this.handleDone}
                    addToNotes={this.addToNotes}
                    deleteNote={this.deleteNote}
                    />
                    
                } 

            </div>
        )


    }
}
