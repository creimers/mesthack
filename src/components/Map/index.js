import React, { Component } from 'react';

import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";

const token = 'pk.eyJ1IjoiY3JlaW1lcnMiLCJhIjoiY2o4b2d3ZHNxMDJiczMycDYzdXgyaHNnYiJ9.lv43SVuUini5Qm6cCLpfJw'

const MapboxMap = ReactMapboxGl({
  accessToken: token,
  interactive: true
});


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
    return (
      <MapboxMap
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{height: '100%', width: '100%'}}
        center={this.state.center}
        zoom={this.state.zoom}
        onMoveEnd={(map, e) => this.updateCenter(map.transform._center)}
        onZoomEnd={(map, e) => this.updateZoom(map.transform._zoom)}
      >
        <GeoJSONLayer
          data={this.props.data}
          fillPaint={{'fill-color': {property: 'impact', stops: impactStops}}}
          fillOnClick={this.handleOnClick}
        >
        </GeoJSONLayer>
      </MapboxMap>
    )
  }
}
