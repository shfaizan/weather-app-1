import React, { Component } from "react"
import Temperature from "./Temperature"
import { toCelsius, toFahrenheit } from "./pure-functions"

class Weather extends Component {
  constructor() {
    super()
    this.state = {
      temperature: 0,
      isCelsius: false
    }
    // start update weather data
    this.loadWeatherData()
    this.timer = setInterval(this.loadWeatherData, 20000)
  }
  componentWillUnmount = () => {
    clearInterval(this.timer)
  }
  loadWeatherData = () => {
    let dummyWeatherServer = "http://127.0.01:3001/api"
    fetch(dummyWeatherServer)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          temperature: data.temperature,
          isCelsius: data.isCelsius
        })
      )
      .catch(e => console.error(e))
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
