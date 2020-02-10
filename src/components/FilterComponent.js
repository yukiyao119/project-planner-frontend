import React, { Component } from 'react'

export class FilterComponent extends Component {

    render() {

        return (
            <div className="ui very relaxed two column grid">
                <div className="column">
                    <div className="ui search">
                        <div className="ui left icon input">
                            <input type="text" 
                                autoComplete="off"
                                onChange={this.props.handleSearch} 
                                placeholder="Search..." />
                            <i aria-hidden="true" className="search icon"></i>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="column" >
                <div >Sort By:  
                    <select  onChange={this.props.handleSort}>
                        <option value="">ALL</option>
                        <option value="name">Sort by Name</option>
                    </select>
                </div>
                </div>
            </div>


        )
    }
}

export default FilterComponent
