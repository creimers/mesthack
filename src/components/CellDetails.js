import React from 'react'

const wrappingStyles = {
  padding: '25px',
  backgroundColor: '#f1f1f1',
  flex: 1,
  borderTop: '1px solid black'
}

export default (props) => (
  <div style={wrappingStyles}>
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <button onClick={props.onClose}>close</button>
    </div>
    <div>
      ID: {props.cell.perc_id}
    </div>
    <div>
      Soil: {props.cell.bt_klasse1}
    </div>
    <div>
      Crop: {props.cell.la_gewas}
    </div>
  </div>
)
