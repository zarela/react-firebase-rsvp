import React, { Component } from 'react';
import logo from './mini-unicorn.svg'
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'
import ShowerDetails from './ShowerDetails/ShowerDetails'
import Rsvp from './Rsvp/Rsvp'
import Registry from './Registry/Registry'
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
      notes: [],
      path: 'details',
    }
  }

  componentWillMount() {
    const previousNotes = this.state.notes

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
        noteAuthor: snap.val().noteAuthor
      })

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.database.push().set(note)
  }

  renderView = view => {
    this.setState({
      path: view
    })
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

        <ul className="menu-items">
          <li className="tab">
            <button className="tab" onClick={() => this.renderView('details')}>Shower Details</button>
          </li>
          <li className="tab">
            <button className="tab" onClick={() => this.renderView('rsvp')}>RSVP</button>
          </li>
          <li className="tab">
            <button className="tab" onClick={() => this.renderView('registry')}>Registry</button>
          </li>
          <li className="tab">
            <button className="tab" onClick={() => this.renderView('friendsNotes')}>Friends Notes</button>
          </li>
        </ul>

        {this.state.path === 'details' && (
          <ShowerDetails />
        )}
        {this.state.path === 'rsvp' && (
          <Rsvp />
        )}
        {this.state.path === 'registry' && (
          <Registry />
        )}
        {this.state.path === 'friendsNotes' && (
          <div className="notesWrapper">
            <div className="notesBody">
              {this.state.notes.map(note => {
                return (
                  <Note
                    note={note}
                    key={note.id}
                  />
                )}
              )}
            </div>
            <div className="notesFooter">
              <NoteForm addNote={this.addNote}/>
            </div>
          </div>
        )}

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
