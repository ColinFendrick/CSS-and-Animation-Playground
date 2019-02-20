import React, { Component } from 'react'
import './App.css'
import { ColorPanels, Globs } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorPanels />
        <Globs />
      </div>
    )
  }
}

export default App
