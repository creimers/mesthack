import React, { Component } from 'react';


export default class Sidebar extends Component {

  onSliderChange = (event) => {
    this.props.handleSliderChange(event.target.value)
  }

  render() {
    return (
      <div>
        <input 
          type="range" 
          min="0" max="500" 
          value={this.props.sliderValue} 
          onChange={this.onSliderChange}
          step="1"/>
      </div>
    )
  }
}
