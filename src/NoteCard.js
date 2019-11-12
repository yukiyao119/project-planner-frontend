import React, { Component } from 'react';
import NoteForm from './NoteForm.js'


export default class NoteCard extends Component {

    mapNotes = () => {
        return (
        <ol>
         {this.props.selected.notes.map( note => {
             return <li>{note.content}</li>
           })}
       </ol>
     )
    }

    render() {
    console.log("YUKI", this.props.selected.notes)
               
    // })
    // const mapNotes = () => {
    //     if (this.props.selected.notes === undefined){
    //         return null
    //     } else {
    //         this.props.selected.notes.map( (notes) => {
    //             console.log(notes.content)
    //             return notes.content
    //         })}
    // }
    
    //map is a function that calls the callback
    // map will call on the callback function and pass in the arguement and the callback
    //return and array one at time of the argument. 
    // we have to invoke it to get hte return value
    //you only have to invote when you want a return value in line 32
        return (
            <div style={{border: '1px red solid'}}>
                Im A Note Card
                {/* <ol>{ this.mapNotes()} </ol> */}
                <ol>{ this.props.selected.notes ? this.mapNotes() : " "}</ol>
                
                
                <NoteForm selected={this.props.selected} 
                        addToNotes={this.props.addToNotes}
                        />
                
            </div>
        )
    }
}
