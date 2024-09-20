import React, { Component } from 'react'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
      <div className='row m-5'> 
        <Cart title="One"/>
        <Cart title="Two"/>
        <Cart />
        <Cart />    
      </div>
    )
  }
}

export default App