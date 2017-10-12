import React, { Component } from 'react';

import ReactMapboxGl, { GeoJSONLayer, Marker } from "react-mapbox-gl";

import { shape } from './../../data/geo'
import geojson from './../../data/parcelen.geojson'

const token = 'pk.eyJ1IjoiY3JlaW1lcnMiLCJhIjoiY2o4b2d3ZHNxMDJiczMycDYzdXgyaHNnYiJ9.lv43SVuUini5Qm6cCLpfJw'

const MapboxMap = ReactMapboxGl({
  accessToken: token,
  interactive: true
});


export default class Map extends Component {

  handleOnClick = (fill) => {
    console.log(fill)
  }

  render() {
    const fillColor = this.props.sliderValue < 100 ? 'yellow' : 'red'
    return (
      <MapboxMap
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{height: '100vh', width: '100%'}}
        center={[4.9944, 52.2528]}
        zoom={[12]}
      >
        <GeoJSONLayer
          data={geojson}
          fillPaint={{'fill-color': fillColor}}
          fillOnClick={this.handleOnClick}
        >
        </GeoJSONLayer>
      </MapboxMap>
    )
  }
}
