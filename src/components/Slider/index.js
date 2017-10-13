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
          name={'Mest'}
          min="1"
          max="250"
          value={this.props.manureValue}
          onChange={this.onSliderChange('manureValue')}
        />

        <InputRange
          name={'Neerslag'}
          min="1"
          max="100"
          value={this.props.precipitationValue}
          onChange={this.onSliderChange('precipitationValue')}
        />

        <h3>gebruikte data</h3>
        <ul>
          <li>bodemgegevens Eurofins</li>
          <li>weergegevens KNMI</li>
          <li>waterkwaliteitsgegevens waterschap</li>
          <li>mestgegevens KringloopWijzer</li>
          <li>bedrijfsinformatie GDI</li>
        </ul>

      </div>
    )
  }
}
