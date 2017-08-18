import React from "react"
import PropTypes from "prop-types"
import { round } from "./pure-functions"

const Temperature = ({
  location,
  temperature,
  text,
  temperatureScale,
  onClick
}) => {
  return (
    <div>
      <h1>
        {location}
      </h1>
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

Temperature.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  temperatureScale: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Temperature
