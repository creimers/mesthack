import React from 'react'

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const labelStyle = {
  flex: 2
}

const inputStyle = {
  flex: 3
}

const valueStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end'
}

const InputRange = (props) => (

  <div style={wrapperStyle}>
    <label style={labelStyle}>{props.name}</label>
    <input 
      type="range" 
      min={props.min}
      max={props.max}
      value={props.value} 
      onChange={props.onChange}
      step="1"
      style={inputStyle}
    />
    <span style={valueStyle}>{props.value}</span>
  </div>
)

export default InputRange
