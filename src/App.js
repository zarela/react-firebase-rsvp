import React, { Component } from 'react';
import logo from './mini-unicorn.svg'
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'
import Firebase from './Config/config'
import firebase from 'firebase/app'
import 'firebase/database'
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.addNote = this.addNote.bind(this)

    this.app = Firebase

    this.database = this.app.database().ref().child('notes')

    this.state = {
      notes: []
    }
  }

  componentWillMount() {
    const previousNotes = this.state.notes

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.database.push().set({ noteContent: note })
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
