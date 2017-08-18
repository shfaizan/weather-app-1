import React, { Component } from "react"
import Temperature from "./Temperature"
import { toFahrenheit } from "./pure-functions"

class Weather extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        name: ""
      },
      temperature: 0,
      condition: {
        text: ""
      },
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
    let dummyWeatherServer = "http://127.0.01:3001/api"
    fetch(dummyWeatherServer)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          location: data.location,
          temperature: data.current.temp_c,
          condition: data.current.condition
        })
      })
      .catch(e => console.error(e))
  }
  toggleTemperatureScale = () => {
    this.setState({
      isCelsius: !this.state.isCelsius
    })
  }
  render() {
    let { condition, isCelsius, temperature, location } = this.state
    let { name } = location
    let { text } = condition
    let temp = isCelsius ? temperature : toFahrenheit(temperature)
    return (
      <div style={weatherStyles}>
        <Temperature
          onClick={this.toggleTemperatureScale}
          location={name}
          temperature={temp}
          text={text}
          temperatureScale={isCelsius ? "C" : "F"}
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
