import React from "react"
import PropTypes from "prop-types"

const TemperatureFormat = ({ onClick, isCelsius }) => {
  return (
    <span onClick={onClick}
      style={scalesStyles}>
      {isCelsius
        ? <span>
          <b>
            <sup>o</sup>C
          </b>/<sup>o</sup>F
        </span>
        : <span>
          <sup>o</sup>C/<b>
            <sup>o</sup>F
          </b>
        </span>}
    </span>
  )
}

let scalesStyles = {
  padding: "3px"
}

TemperatureFormat.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCelsius: PropTypes.bool.isRequired
}

export default TemperatureFormat
