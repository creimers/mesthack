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
        <h2 style={{textAlign: 'center', fontSize: '3em'}}>💩</h2>
        <div style={sliderStyle}>
          <input 
            type="range" 
            min="0" max="500" 
            value={this.props.sliderValue} 
            onChange={this.onSliderChange}
            step="1"
            style={{flex: 3}}
          />
          <span style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>{this.props.sliderValue}</span>
        </div>

      </div>
    )
  }
}
