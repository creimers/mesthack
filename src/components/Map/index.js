import React, { Component } from 'react';

import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";

import { data } from './../../data/parcelen.js'

const token = 'pk.eyJ1IjoiY3JlaW1lcnMiLCJhIjoiY2o4b2d3ZHNxMDJiczMycDYzdXgyaHNnYiJ9.lv43SVuUini5Qm6cCLpfJw'

const MapboxMap = ReactMapboxGl({
  accessToken: token,
  interactive: true
});

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

  // cell.properties.impact = prec * manure * soil * crop * pal * morf / 18000 * 100

  // cell.properties.impact = Math.floor(Math.random() * 10) / 10
  cell.properties.impact = Math.floor(prec / 100 * 10) / 10
  // console.log(cell.properties.impact)
  return cell
}

const calculateDataWithImpact = (manure, prec) => {
  data.features = data.features.map((cell) => calculateImpact(manure, prec, cell))
  return data
}

const impactStops = [
  [0.0, '#ffebee'],
  [0.1, '#ffcdd2'],
  [0.2, '#ef9a9a'],
  [0.3, '#e57373'],
  [0.4, '#ef5350'],
  [0.5, '#f44336'],
  [0.6, '#e53935'],
  [0.7, '#d32f2f'],
  [0.8, '#c62828'],
  [0.9, '#b71c1c'],
  [1.0, '#d50000']
]


export default class Map extends Component {

  state = {
    center: [5.00715, 52.27266],
    zoom: [14]
  }

  handleOnClick = (fill) => {
    this.props.handleSetActiveCell(fill.features[0].properties)
  }

  updateCenter = (center) => {
    this.setState({center: [center.lng, center.lat]})
  }

  updateZoom = (zoom) => {
    this.setState({zoom: [zoom]})
  }

  render() {
    const dataWithImpact = calculateDataWithImpact(this.props.manureValue, this.props.precipitationValue)
    //
    // const features = data.features.map((cell) => calculateImpact(this.props.manureValue, this.props.precipitationValue, cell)) 
    // data.features = features
    // const impacts = data.features.map((cell) => cell.properties.impact)
    // console.log(impacts)
    // console.log('max', Math.max(...impacts))
    return (
      <MapboxMap
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{height: '100vh', width: '100%'}}
        center={this.state.center}
        zoom={this.state.zoom}
        onMoveEnd={(map, e) => this.updateCenter(map.transform._center)}
        onZoomEnd={(map, e) => this.updateZoom(map.transform._zoom)}
      >
        <GeoJSONLayer
          data={dataWithImpact}
          fillPaint={{'fill-color': {property: 'impact', stops: impactStops}}}
          fillOnClick={this.handleOnClick}
        >
        </GeoJSONLayer>
      </MapboxMap>
    )
  }
}
