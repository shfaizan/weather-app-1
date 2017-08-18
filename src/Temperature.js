import React from "react"
import PropTypes from "prop-types"
import { round } from "./pure-functions"

const Temperature = ({ temperature, condition, isCelsius, onClick }) => {
  return (
    <div>
      <div onClick={onClick}>
        Temperature: {round(temperature)} <sup>o</sup>
        {isCelsius ? "C" : "F"}
      </div>
      <div>
        {condition}
      </div>
    </div>
  )
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  isCelsius: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Temperature
