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
    sliderVal: 0
  }

  onSliderChange = (val) => {
    console.log(val)
  }

  render() {
    return (
      <div style={appStyles}>
        <div style={sidebarStyles}>
          <Sidebar />
        </div>
        <div style={mapStyles}>
          <Map />
          </div>
      </div>
    );
  }
}

export default App;
