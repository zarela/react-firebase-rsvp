import React, { Component } from 'react';
import logo from './mini-unicorn.svg'
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'
import Firebase from './Config/config'
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

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Baby Graves</div>
        </div>
        <p>
          It's a girl! <br />
          Thank you for sharing this special time with us, to celebrate the welcoming of our baby girl!
        </p>

        <ul class=" menu-items">
            <li class="tab">
              <a ui-sref="rsvp" ui-sref-active="active">RSVP</a>
            </li>
            <li class="tab">
              <a ui-sref="shower-details" ui-sref-active="active">Shower Details</a>
            </li>
            <li class="tab">
              <a ui-sref="registry" ui-sref-active="active">Registry</a>
            </li>
            <li class="tab">
              <a ui-sref="friends-notes" ui-sref-active="active">Friends Notes</a>
            </li>
          </ul>

        <div className="notesWrapper">
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
        <div className="footer">
          © ZG Stardust {''}
          {this.getYear()} {''}
          &#10084; All Rights Reserved
        </div>
      </div>
    )
  }
}

export default App
