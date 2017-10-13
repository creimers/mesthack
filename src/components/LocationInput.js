import React from 'react'

const wrappingStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '75px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  zIndex: 1
}

const inputStyles = {
  height: '40px',
  width: '500px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02)',
  border: 0,
  paddingLeft: '14px',
  fontSize: '15px',
  marginRight: '100px'
}

export default (props) => (

    <div style={wrappingStyles}>
      <input style={inputStyles} type="text" value={props.value} readOnly={true}/>
    </div>
)
