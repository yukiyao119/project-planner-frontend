import React, { Component } from 'react';
import FilterComponent from './FilterComponent';

export default class ProjectList extends Component {

    state = {
        // curProjects: this.props.projects,
        sortMethod: '',
        query: ''
    }

    handleSearch = (evt) => {
        this.setState({
            query: evt.target.value
        }, ()=> {console.log(this.state)})
    }

    resultProject = (projects) => {
        if (this.state.query){
          return [...projects].filter(project => project.name.toLowerCase().includes(this.state.query))
        } else {
          return projects
        }
      }

    handleSort = (evt) => {
        console.log(evt.target.value);
        this.setState({
            sortMethod: evt.target.value
        })
    }

    sortProjects = (projects) => {
        if (this.state.sortMethod === "name") {
            return [...projects].sort((a,b) => a.name.localeCompare(b.name))
        } else {
            return projects
        }
    }



    render() {
        // const resultProject = this.resultProject(this.state.curProjects)

        const sortedProject = this.sortProjects(this.props.projects)

        const searchedProject = this.resultProject(sortedProject)

        const projectsItem = searchedProject.map(project => 
            <li key={project.id} 
                onClick={() => this.props.handleShowCard(project)}>
                    {project.name}
            </li>)

        return (
            // 
            <div >
                {/* <div> */}
                    <FilterComponent 
                    handleSearch={this.handleSearch}
                    handleSort={this.handleSort}
                    />
                {/* </div> */}
                <h2 className="ui header purple">Project List: </h2>

                <h2>{projectsItem}</h2>
            </div>
        )
    }
}

// const listStyle = {
//     // border: '1px pink solid',
//     margin: '20px 5px 20px 20px'
// }