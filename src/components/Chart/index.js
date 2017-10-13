import React, { Component } from 'react';

import Dimensions from 'react-dimensions'

import { LineChart, Line, XAxis, YAxis } from 'recharts'

const calculateLines = (manure) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const seriesOne = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  const seriesTwo = seriesOne.map((value) => value * 0.5)
  const seriesThree = seriesOne.map((value) => value * 0.2)

  const randomValsOne = months.map((month) => seriesOne[Math.floor(Math.random() * seriesOne.length)] * (1 + manure / 250))
  const randomValsTwo = months.map((month) => seriesTwo[Math.floor(Math.random() * seriesTwo.length)] * (1 + manure / 250))
  const randomValsThree = months.map((month) => seriesThree[Math.floor(Math.random() * seriesThree.length)] * (1 + manure / 250))

  const data = months.map((month, index) => {
    return {
      month: month,
      one: randomValsOne[index],
      two: randomValsTwo[index],
      three: randomValsThree[index],
    }
  })

  return data
}

const wrappingStyles = {
  display: 'flex',
  alignItems: 'center',
  height: '100%'
}


class Chart extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.manureValue !== this.props.manureValue
  }

  render() {
    const data = calculateLines(this.props.manureValue)
    return (
      <div style={wrappingStyles}>
        <LineChart
          width={this.props.containerWidth}
          height={200}
          data={data}
          margin={{top: 5, right: 30, left: 10, bottom: 5}}
        >
          <XAxis dataKey="month"/>
          <YAxis/>
          <Line type="monotone" dataKey="one" stroke="#8884d8" />
          <Line type="monotone" dataKey="two" stroke="#82ca9d" />
          <Line type="monotone" dataKey="three" stroke="#f00000" />
        </LineChart>
      </div>
    )
  }
}

export default Dimensions()(Chart)
