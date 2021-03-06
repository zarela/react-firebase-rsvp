import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newNoteContent: '',
      newNoteAuthor: ''
    }
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.writeNote = this.writeNote.bind(this)
  }

  handleContentChange(e){
    this.setState({
      newNoteContent: e.target.value
    })
  }

  handleAuthorChange(e){
    this.setState({
      newNoteAuthor: e.target.value
    })
  }

  writeNote(){
    this.props.addNote({
      noteContent: this.state.newNoteContent,
      noteAuthor: this.state.newNoteAuthor,
    })
    this.setState({
      newNoteContent: '',
      newNoteAuthor: ''
    })
  }

  render(){
    return(
      <div className="formWrapper">
        <textarea
          className="noteInput"
          placeholder="Write your message..."
          value={this.state.newNoteContent}
          onChange={this.handleContentChange}
        />
        <div className="submitBlock">
          <input
            className="authorInput"
            placeholder="Your name..."
            value={this.state.newNoteAuthor}
            onChange={this.handleAuthorChange}
          />
          <button
            className="noteButton"
            onClick={this.writeNote}
          >
            Send message
          </button>
        </div>
      </div>
    )
  }
}

export default NoteForm