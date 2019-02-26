import React, { Component } from 'react'
import './App.css'
import { ColorPanels, CoolBoxes, Globs } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorPanels />
        <CoolBoxes />
        <Globs />
      </div>
    )
  }
}

export default App
