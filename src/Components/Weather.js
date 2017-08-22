/* eslint-disable react/prop-types */
import React, { PureComponent } from "react"
import { compose } from "recompose"
import Temperature from "./Temperature"
import { toFahrenheit } from "../Libs/pure-functions"
import apiKey from "../key-info/apixu"

/*
  Dummy Server info:

    dummyWeatherServerUrl = "http://127.0.01:3001/api"
    dummyWeatherIcon = "http://127.0.0.1:3001/cloudy.png"
*/

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
  getUrl = apiKey => (lat, long) =>
    `http://api.apixu.com/v1/current.json?key=${apiKey}&q=${lat},${long}`
  loadWeatherData = async () => {
    let latitude = 55.953252
    let longitude = -3.188267

    let weatherServerAtGPS = this.getUrl(apiKey)
    let weatherServerUrl = weatherServerAtGPS(latitude, longitude)
    try {
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
