import React, { Component } from 'react';

import InputRange from './InputRange'

const wrappingStyles = {
  padding: '25px'
}


export default class Sidebar extends Component {

  onSliderChange = (slider) => (event) => {
    this.props.handleSliderChange(slider, event.target.value)
  }

  render() {
    return (
      <div style={wrappingStyles}>

        <InputRange
          name={'Manure'}
          min="1"
          max="250"
          value={this.props.manureValue}
          onChange={this.onSliderChange('manureValue')}
        />

        <InputRange
          name={'Precipitation'}
          min="1"
          max="100"
          value={this.props.precipitationValue}
          onChange={this.onSliderChange('precipitationValue')}
        />

      </div>
    )
  }
}
