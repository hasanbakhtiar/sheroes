import React, { Component } from 'react'
import img from './img/nature-wallpapers.jpg';
export class Card extends Component {
  render() {
    return (
      <div>
        <img src={img} width={200} alt="" />
      </div>
    )
  }
}

export default Card