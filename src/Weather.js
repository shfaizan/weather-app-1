import React, { Component } from "react"
import Temperature from "./Temperature"
import { toFahrenheit } from "./pure-functions"

class Weather extends Component {
  constructor() {
    super()
    this.state = {
      temperature: 0,
      condition: "",
      isCelsius: true
    }
    // start updating weather data
    this.loadWeatherData()
    this.timer = setInterval(this.loadWeatherData, 20000)
  }
  componentWillUnmount = () => {
    clearInterval(this.timer)
  }
  loadWeatherData = () => {
    let dummyWeatherServer = "http://127.0.01:3001/current"
    fetch(dummyWeatherServer)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          temperature: data.temp_c,
          condition: data.condition.text
        })
      )
      .catch(e => console.error(e))
  }
  toggleTemperatureScale = () => {
    this.setState({
      isCelsius: !this.state.isCelsius
    })
  }
  render() {
    let temperature = this.state.isCelsius
      ? this.state.temperature
      : toFahrenheit(this.state.temperature)
    return (
      <div style={weatherStyles}>
        <Temperature
          onClick={this.toggleTemperatureScale}
          temperature={temperature}
          condition={this.state.condition}
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
