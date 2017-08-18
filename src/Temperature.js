import React from "react"
import PropTypes from "prop-types"
import { round } from "./pure-functions"

const Temperature = ({ temperature, isCelsius, onClick }) => {
  return (
    <div>
      <div onClick={onClick}>
        Temperature: {round(temperature)} <sup>o</sup>
        {isCelsius ? "C" : "F"}
      </div>
    </div>
  )
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  isCelsius: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Temperature
