import React, { Component } from 'react';

const wrappingStyles = {
  padding: '25px'
}

const sliderStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}


export default class Sidebar extends Component {

  onSliderChange = (event) => {
    this.props.handleSliderChange(event.target.value)
  }

  render() {
    return (
      <div style={wrappingStyles}>
        <h2>💩</h2>
        <div style={sliderStyle}>
          <input 
            type="range" 
            min="0" max="500" 
            value={this.props.sliderValue} 
            onChange={this.onSliderChange}
            step="1"/>
          <span>{this.props.sliderValue}</span>
        </div>

      </div>
    )
  }
}
