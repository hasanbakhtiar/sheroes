import React, { Component } from 'react'
import Header from './components/Header'
import Quantity from './components/Quantity'

 class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
            <Quantity />
        </div>
      </div>
    )
  }
}

export default App