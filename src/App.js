import React, { Component } from 'react';

import { data } from './data/parcelen.js'

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

const calculateImpact = (manure, prec, cell) => {
  const { properties } = cell

  const soil = properties.bt_klasse1 === 'KLEI' ?  1.0 : 0.5
  const crop = properties.la_gewas === 'GRS' ?  0.4 : 0.6
  const pal = properties.be_pal > 36 ? 0.7 : 0.3

  let morf
  if (properties.p_vormcat === 'bol') {
    morf = 2
  } else if (properties.p_vormcat === 'greppel') {
    morf = 1
  } else {
    morf = 0.1
  }

  cell.properties.impact = prec * manure * soil * crop * pal * morf * 100 / 18000 

  return cell
}

const calculateDataWithImpact = (manure, prec) => {
  let dataCopy = {...data}
  dataCopy.features = dataCopy.features.map((cell) => calculateImpact(manure, prec, cell))
  return dataCopy
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
      return <CellDetails cell={this.state.activeCell} />
    }
  }

  setActiveCell = (cell) => {
    this.setState({activeCell: cell})
  }

  render() {
    const dataWithImpact = calculateDataWithImpact(this.state.manureValue, this.state.precipitationValue)

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
            manureValue={this.state.manureValue}
            precipitationValue={this.state.precipitationValue}
            handleSetActiveCell={this.setActiveCell}
            data={dataWithImpact}
          />
          </div>
      </div>
    );
  }
}

export default App;
