import React, { Component } from 'react';
import NoteCard from './NoteCard';
import EditProjectForm from './EditProjectForm'

export default class ProjectCard extends Component {

    render() {
        return (
            <div style={{border: '1px pink solid'}}>
                Im Project Card
                <NoteCard />
            </div>
        )
    }
}
