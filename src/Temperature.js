import React from "react"
import PropTypes from "prop-types"
import { round } from "./pure-functions"

const Temperature = ({
  location,
  temperature,
  text,
  isCelsius,
  onClick,
  icon
}) => {
  return (
    <div style={temperatureStyles}>
      <div style={headerBlockStyle}>
        <h1 style={headerStyle}>
          {location}
        </h1>
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
      </div>
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
    </div>
  )
}

let headerStyle = {
  marginTop: "14px"
}

let scalesStyles = {
  padding: "3px"
}

let headerBlockStyle = {
  display: "flex",
  justifyContent: "space-between"
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

let temperatureStyles = {
  marginLeft: "10px",
  padding: "2px"
}

Temperature.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCelsius: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
}

export default Temperature
