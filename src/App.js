import React, { Component } from 'react'
import logo from './mini-unicorn.svg'
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.addNote = this.addNote.bind(this)

    this.state = {
      notes: [
        {id: 1, noteContent: 'This is note 1'},
        {id: 2, noteContent: 'This is note 2'},
      ]
    }
  }

  addNote(note){
    const previousNotes = this.state.notes;
    previousNotes.push(
      { id: previousNotes.length + 1, noteContent: note}
    )

    this.setState({
      notes: previousNotes
    })
  }

  render() {
    return (
      <div className="App">
        <div className="notesWrapper">
            <div className="notesHeader">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="heading">Baby Graves</div>
            </div>
            <div className="notesBody">
              {this.state.notes.map(note => {
                return (
                  <Note
                    noteContent={note.noteContent}
                    noteId={note.id}
                    key={note.id}
                  />
                )}
              )}
            </div>
            <div className="notesFooter">
              <NoteForm addNote={this.addNote}/>
            </div>
          </div>
      </div>
    )
  }
}

export default App
