import React, { Component } from 'react';

import CellDetails from './components/CellDetails'
import Map from './components/Map'
import Sliders from './components/Sidebar'

const appStyles = {
  display: 'flex'
}

const sidebarStyles = {
  flex: 1,
  flexDirection: 'column',
  display: 'flex'
}

const mapStyles = {
  flex: 4
}

class App extends Component {
  state = {
    manureValue: 1,
    precipitationValue: 1,
    activeCell: null
  }

  onSliderChange = (slider, val) => {
    this.setState({[slider]: val})
  }

  renderActiveCell = () => {
    if (this.state.activeCell) {
      console.log(this.state.activeCell)
      return <CellDetails cell={this.state.activeCell} />
    }
  }

  setActiveCell = (cell) => {
    this.setState({activeCell: cell})
  }

  render() {
    return (
      <div style={appStyles}>
        <div style={sidebarStyles}>
          <div style={{flex: 1}}>
            <Sliders
              manureValue={this.state.manureValue}
              precipitationValue={this.state.precipitationValue}
              sliderValue={this.state.manureValue}
              handleSliderChange={this.onSliderChange}
            />
          </div>
          <div style={{flex: 1}}>
            {this.renderActiveCell()}
          </div>
        </div>
        <div style={mapStyles}>
          <Map
            sliderValue={this.state.manureValue}
            handleSetActiveCell={this.setActiveCell}
          />
          </div>
      </div>
    );
  }
}

export default App;
