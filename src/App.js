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
    sliderValue: 0
  }

  onSliderChange = (val) => {
    this.setState({sliderValue: val})
  }

  render() {
    return (
      <div style={appStyles}>
        <div style={sidebarStyles}>
          <Sidebar
            sliderValue={this.state.sliderValue}
            handleSliderChange={this.onSliderChange}
          />
        </div>
        <div style={mapStyles}>
          <Map sliderValue={this.state.sliderValue} />
          </div>
      </div>
    );
  }
}

export default App;
