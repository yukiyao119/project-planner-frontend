import React, { Component } from 'react'

export class FilterComponent extends Component {

    render() {

        return (
            <div>
                <div>
                    <input type="text" 
                        onChange={this.props.handleSearch} 
                        placeholder="Search..." />
                </div>
            
                <div style={{height: "10vh"}}>
                    Sort By:
                    <select onChange={this.props.handleSort}>
                        <option value="">ALL</option>
                        <option value="name">Sort by Name</option>
                    </select>
                </div>
            </div>


        )
    }
}

export default FilterComponent
