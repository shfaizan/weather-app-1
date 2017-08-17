import React, { Component } from "react"
import Temperature from "./Temperature"
import { toCelsius, toFahrenheit } from "./pure-functions"

class Weather extends Component {
  constructor() {
    super()
    this.timer = setInterval(() => {
      console.log("Loading weather data...")
    }, 2000)
    this.state = {
      temperature: 56,
      isCelsius: false
    }
  }
  componentWillUnmount = () => {
    clearInterval(this.timer)
  }
  toggleTemperatureScale = () => {
    let temperature = this.state.isCelsius
      ? toFahrenheit(this.state.temperature)
      : toCelsius(this.state.temperature)
    let isCelsius = !this.state.isCelsius

    this.setState({
      temperature,
      isCelsius
    })
  }
  render() {
    return (
      <div style={weatherStyles}>
        <Temperature
          onClick={this.toggleTemperatureScale}
          temperature={this.state.temperature}
          isCelsius={this.state.isCelsius}
        />
      </div>
    )
  }
}

let weatherStyles = {
  width: "400px",
  height: "200px",
  border: "1px solid #fdb",
  borderRadius: "3%",
  backgroundColor: "#ffd"
}

export default Weather
