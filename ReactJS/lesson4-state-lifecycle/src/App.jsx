import React, { Component } from 'react'
import Header from './components/Header'
import LifeCycle from './components/LifeCycle'

 class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <LifeCycle />
        </div>
      </div>
    )
  }
}

export default App