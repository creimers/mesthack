import React, { Component } from 'react';

import ReactMapboxGl, { GeoJSONLayer, Layer, Feature } from "react-mapbox-gl";

const token = 'pk.eyJ1IjoiY3JlaW1lcnMiLCJhIjoiY2o4b2d3ZHNxMDJiczMycDYzdXgyaHNnYiJ9.lv43SVuUini5Qm6cCLpfJw'

const MapboxMap = ReactMapboxGl({
  accessToken: token,
  interactive: true
});

const impactStopsOrange = [
  [0.0, '#FFF3E0'],
  [0.1, '#FFE0B2'],
  [0.2, '#FFCC80'],
  [0.3, '#FFB74D'],
  [0.4, '#FFA726'],
  [0.5, '#FF9800'],
  [0.6, '#FB8C00'],
  [0.7, '#F57C00'],
  [0.8, '#EF6C00'],
  [0.9, '#E65100'],
  [1.0, '#BF360C']
]

export default class Map extends Component {

  state = {
    center: [5.0404, 52.2698],
    zoom: [13]
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
          fillPaint={{'fill-color': {property: 'impact', stops: impactStopsOrange}}}
          linePaint={{'line-color': 'grey'}}
          fillOnClick={this.handleOnClick}
        >
        </GeoJSONLayer>

        <Layer
          type="circle"
          paint={{
            'circle-radius': 15,
            'circle-color': '#000',
          }}
        >
          <Feature coordinates={[5.0189803, 52.27169]}/>
        </Layer>
      </MapboxMap>
    )
  }
}
