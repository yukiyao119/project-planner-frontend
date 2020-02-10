import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="ui piled segment" id="segment-width">
                <h2 class="ui header purple" id="fonts">Project Planner</h2>
                
                <h3 class="ui header grey">
                    This is an application made with Ruby on Rails API and React.js.<br/>
                    It helps you organize your current projects.
                    It allows you to browse, search, sort, create, edit current projects. As well as view the details, add and delete notes.
                </h3>
            </div>
        )
    }
}
