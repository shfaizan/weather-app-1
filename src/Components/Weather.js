/* eslint-disable react/prop-types */
/* eslint-disable no-console */

import React, { PureComponent } from "react"
import { compose } from "recompose"

import getUserLocation from "../Libs/getLocation"
import Temperature from "./Temperature"
import { toFahrenheit } from "../Libs/pure-functions"
import apiKey from "../key-info/apixu"

class Weather extends PureComponent {
  state = {
    isLoading: true,
    location: {},
    temperature: 0,
    condition: {},
    isCelsius: true
  }
  componentDidMount = () => {
    // start updating weather data
    this.loadWeatherData()
    this.timer = setInterval(this.loadWeatherData, 300000)
  }
  componentWillUnmount = () => {
    clearInterval(this.timer)
  }
  getUrl = apiKey => (lat, long) => {
    return `http://api.apixu.com/v1/current.json?key=${apiKey}&q=${lat},${long}`
  }
  loadWeatherData = async () => {
    try {
      let { latitude, longitude, error } = await getUserLocation()
      if (error) {
        console.error("GPS Location Errror: ", error)
        // if we can't get the user's location use a default position
        latitude = 55.9485947
        longitude = -3.1999135
      }
      let weatherDataForGPS = this.getUrl(apiKey)
      let weatherServerUrl = weatherDataForGPS(latitude, longitude)
      let response = await fetch(weatherServerUrl)
      let data = await response.json()
      this.setState({
        isLoading: false,
        location: data.location,
        temperature: data.current.temp_c,
        condition: data.current.condition,
        icon: "http:" + data.current.condition.icon
      })
    } catch (error) {
      console.error(error)
    }
  }
  toggleTemperatureScale = () => {
    this.setState({
      isCelsius: !this.state.isCelsius
    })
  }
  render() {
    let {
      condition,
      isCelsius,
      temperature,
      location,
      isLoading,
      icon
    } = this.state
    let { name } = location
    let { text } = condition
    return (
      <TemperatureWithLoading
        onClick={this.toggleTemperatureScale}
        isLoading={isLoading}
        location={name}
        temperature={isCelsius ? temperature : toFahrenheit(temperature)}
        text={text}
        isCelsius={isCelsius}
        icon={icon}
      />
    )
  }
}

// For fun let's use some Higher Order Components
// See https://www.robinwieruch.de/gentle-introduction-higher-order-components/
const withLoading = Component => props =>
  <div>
    {props.isLoading ? <span>Loading...</span> : <Component {...props} />}
  </div>

const Panel = props =>
  <div style={weatherStyles}>
    <Temperature {...props} />
  </div>

const TemperatureWithLoading = compose(withLoading)(Panel)

let weatherStyles = {
  width: "300px",
  height: "150px",
  border: "1px solid #fdb",
  borderRadius: "3%",
  backgroundColor: "#ffd"
}

export default Weather
