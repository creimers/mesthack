import React, { Component } from 'react';

import { data } from './data/parcelen.js'

import CellDetails from './components/CellDetails'
import Chart from './components/Chart'
import LocationInput from './components/LocationInput'
import Map from './components/Map'
import Sliders from './components/Slider'

const appStyles = {
  display: 'flex',
  height: '100vh'
}

const sidebarStyles = {
  flex: 1,
  flexDirection: 'column',
  display: 'flex'
}

const mapStyles = {
  flex: 4,
  display: 'flex',
  flexDirection: 'column'
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
    manureValue: 15,
    precipitationValue: 5,
    activeCell: null
  }

  onSliderChange = (slider, val) => {
    this.setState({[slider]: val})
  }

  resetActiveCell = () => {
    this.setState({activeCell: null})
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
          <div style={{flex: this.state.activeCell ? 1 : 0, display: 'flex', transition: 'all 0.5s ease'}}>
            <CellDetails cell={this.state.activeCell || {}} onClose={this.resetActiveCell}/>
          </div>
        </div>
        <div style={mapStyles}>
          <div style={{flex: 3}}>
            <LocationInput value={'Nigtevecht'} />
            <Map
              manureValue={this.state.manureValue}
              precipitationValue={this.state.precipitationValue}
              handleSetActiveCell={this.setActiveCell}
              data={dataWithImpact}
            />
          </div>
          <div style={{flex: 1}}>
            <Chart
              manureValue={this.state.manureValue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
