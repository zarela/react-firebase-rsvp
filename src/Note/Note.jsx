import React, { Component } from 'react'
import './Note.css'

class Note extends Component {
  render(props) {
    return(
      <div className="note fade-in">
        <p className="noteContent">{this.props.note.noteContent}</p>
        <p className="noteAuthor">{this.props.note.noteAuthor || 'Anonymous'}</p>
      </div>
    )
  }
}

export default Note