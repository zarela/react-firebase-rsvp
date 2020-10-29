import React, { Component } from 'react'
import logo from './mini-unicorn.svg'
import Note from './Note/Note'
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [
        {id: 1, noteContent: 'This is note 1'},
        {id: 2, noteContent: 'This is note 2'},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="notesWrapper">
            <div className="notesHeader">
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
              Footer will be here
            </div>
          </div>
      </div>
    )
  }

}

export default App
