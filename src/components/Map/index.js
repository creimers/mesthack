import React, { Component } from 'react';

import ReactMapboxGl, { GeoJSONLayer, Marker } from "react-mapbox-gl";

const token = 'pk.eyJ1IjoiY3JlaW1lcnMiLCJhIjoiY2o4b2d3ZHNxMDJiczMycDYzdXgyaHNnYiJ9.lv43SVuUini5Qm6cCLpfJw'

const MapboxMap = ReactMapboxGl({
  accessToken: token,
  interactive: false
});

export default class Map extends Component {
  render() {
    return (
      <MapboxMap
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{height: '100vh', width: '100%'}}
        center={[4.9042, 52.3547]}
        zoom={[9]}
      >
      </MapboxMap>
    )
  }
}
