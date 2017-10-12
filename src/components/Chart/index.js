import React, { Component } from 'react';

import { LineChart, Line, XAxis, YAxis } from 'recharts'

const calculateLines = (manure) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const seriesOne = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  const seriesTwo = seriesOne.map((value) => value * 0.5)
  const seriesThree = seriesOne.map((value) => value * 0.2)

  const dev = [30, 25, 8, 4, 5, 1, 12, 21, 3, 8, 5.2, 135.5]

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


export default class Chart extends Component {
  render() {
    const data = calculateLines(this.props.manureValue)
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="month"/>
        <YAxis/>
        <Line type="monotone" dataKey="one" stroke="#8884d8" />
        <Line type="monotone" dataKey="two" stroke="#82ca9d" />
        <Line type="monotone" dataKey="three" stroke="#f00000" />
      </LineChart>
    )
  }
}
