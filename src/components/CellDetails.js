import React from 'react'

const wrappingStyles = {
  padding: '25px',
  backgroundColor: '#f1f1f1',
  flex: 1,
  borderTop: '1px solid black'
}

const rowStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px'
}

export default (props) => (
  <div style={wrappingStyles}>
    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '15px'}}>
      <button onClick={props.onClose}>close</button>
    </div>

    <div style={rowStyles}>
      <span>ID</span>
      <span>{props.cell.perc_id}</span>
    </div>

    <div style={rowStyles}>
      <span>Bodem</span>
      <span>{props.cell.bt_klasse1}</span>
    </div>

    <div style={rowStyles}>
      <span>Gewas</span>
      <span>{props.cell.la_gewas}</span>
    </div>

    <div style={rowStyles}>
      <span>Impact</span>
      <span>{props.cell.impact > 0 ? props.cell.impact : '< 0.1'}</span>
    </div>

  </div>
)
