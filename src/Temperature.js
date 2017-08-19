import React from "react"
import PropTypes from "prop-types"
import { round } from "./pure-functions"

const Temperature = ({
  location,
  temperature,
  text,
  temperatureScale,
  onClick,
  icon
}) => {
  return (
    <div style={temperatureStyles}>
      <h1>
        {location}
      </h1>
      <div>
        <img src={icon}
          alt="" />
      </div>
      <div onClick={onClick}>
        Temperature: {round(temperature)} <sup>o</sup>
        {temperatureScale}
      </div>
      <div>
        {text}
      </div>
    </div>
  )
}

let temperatureStyles = {
  marginLeft: "10px",
  padding: "2px"
}

Temperature.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  temperatureScale: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
}

export default Temperature
