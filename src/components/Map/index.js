import React, { Component } from 'react';

import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";

import { data } from './../../data/parcelen.js'

const token = 'pk.eyJ1IjoiY3JlaW1lcnMiLCJhIjoiY2o4b2d3ZHNxMDJiczMycDYzdXgyaHNnYiJ9.lv43SVuUini5Qm6cCLpfJw'

const MapboxMap = ReactMapboxGl({
  accessToken: token,
  interactive: true
});

const calculateImpact = (manure, cell) => {
  // o1 = ifelse(gs %in% 'zand',0.5,1.0)
  // o2 = ifelse(crop %in% "gras",0.4,0.6)
  // o3 = ifelse(pal >36,0.7,0.3)
  // o4 = ifelse(morf %in% "hol",2,ifelse(morf %in% 'greppel',1,0.1))
 
  // score = pal * mest * o1*o2*o3*o4

  const prec = 1
  const { properties } = cell

  const soil = properties.bt_klasse1 === 'KLEI' ?  1.0 : 0.5
  const crop = properties.la_gewas === 'GRS' ?  0.4 : 0.6
  const pal = properties.be_pal > 36 ? 0.7 : 0.3

  let morf

  if (properties.p_vormcat === 'hol') {
    morf = 2
  } else if (properties.p_vormcat === 'greppel') {
    morf = 1
  } else {
    morf = 0.1
  }

  // cell.properties.impact = prec * manure * soil * crop * pal * morf

  cell.properties.impact = Math.floor(Math.random() * 10) / 10
  return cell
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

  handleOnClick = (fill) => {
    this.props.handleSetActiveCell(fill.features[0].properties)
  }

  render() {
    data.features = data.features.map((cell) => calculateImpact(this.props.sliderValue, cell))
    return (
      <MapboxMap
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{height: '100vh', width: '100%'}}
        center={[4.9944, 52.2180]}
        zoom={[14]}
      >
        <GeoJSONLayer
          data={data}
          fillPaint={{'fill-color': {property: 'impact', stops: impactStops}}}
          fillOnClick={this.handleOnClick}
        >
        </GeoJSONLayer>
      </MapboxMap>
    )
  }
}
