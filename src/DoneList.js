import React, { Component } from 'react'

export default class DoneList extends Component {
    render() {
        // console.log(this.props)
        const doneItems = this.props.projectsComplete.map(project => {
            return <li>{project.selected.name} </li>
        })

        return (
            <div style={{border: '1px pink solid'}}>
                Im Done List
                { doneItems}
            </div>
        )
    }
}
