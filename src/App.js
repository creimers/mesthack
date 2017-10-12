import React, { Component } from 'react';

import Map from './components/Map'
import Sidebar from './components/Sidebar'

const appStyles = {
  display: 'flex'
}

const sidebarStyles = {
  flex: 1
}

const mapStyles = {
  flex: 4
}

class App extends Component {
  state = {
    manureValue: 1,
    precipitationValue: 1
  }

  onSliderChange = (slider, val) => {
    this.setState({[slider]: val})
  }

  render() {
    return (
      <div style={appStyles}>
        <div style={sidebarStyles}>
          <Sidebar
            manureValue={this.state.manureValue}
            precipitationValue={this.state.precipitationValue}
            sliderValue={this.state.manureValue}
            handleSliderChange={this.onSliderChange}
          />
        </div>
        <div style={mapStyles}>
          <Map sliderValue={this.state.manureValue} />
          </div>
      </div>
    );
  }
}

export default App;
