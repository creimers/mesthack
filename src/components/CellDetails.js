import React from 'react'

const wrappingStyles = {
  padding: '25px'
}

export default (props) => (
  <div style={wrappingStyles}>
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
