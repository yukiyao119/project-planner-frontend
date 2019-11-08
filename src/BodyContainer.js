import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import DoneList from './DoneList';


export default class BodyContainer extends Component {
    render() {
        return (
            <div style={{border: '2px blue solid'}}>
                <ProjectCard />
                <ProjectList />
                <ProjectForm />
                <DoneList />
            </div>
        )
    }
}
