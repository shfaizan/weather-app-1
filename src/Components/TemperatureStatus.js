import React from "react"
import PropTypes from "prop-types"
import { round } from "../pure-functions"

const TemperatureStatus = ({ temperature, isCelsius, text, icon }) => {
  return (
    <div style={mainStyles}>
      <span>
        <img src={icon}
          alt={text} />
      </span>
      <span>
        <div style={tempBlockStyles}>
          Temperature: {round(temperature)}
          {isCelsius
            ? <span>
              <sup>o</sup>C
            </span>
            : <span>
              <sup>o</sup>F
            </span>}
        </div>
        <div>
          {text}
        </div>
      </span>
    </div>
  )
}

let mainStyles = {
  display: "flex",
  justifyContent: "space-between"
}

let tempBlockStyles = {
  marginTop: "5px",
  marginRight: "28px",
  lineHeight: "1.5"
}

TemperatureStatus.propTypes = {
  temperature: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isCelsius: PropTypes.bool.isRequired
}

export default TemperatureStatus
