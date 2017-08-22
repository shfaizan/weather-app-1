# How to Run the React Weather App

The Weather App displays the weather at the user's current location (depending of the browser's permission settings). It fetches live weather data from the [APIXU](http://www.apixu.com) weather service.

Before you can run the the app, you will need to sign up to get your own API key, then write this information into the _src_ directory. Afterwards, simply type the command:

```
yarn start
```

Enjoy!

# Development Details (Reference only)

During development the weather app was tested using a local dummy JSON server. This was configured to support the JSON data format used by the APIXU weather service. 

I was able to run both the front-end and local server at the same time using the command:

```
yarn start-all
```

The local JSON Server configuration used is as follows:

```
  dummyWeatherServerUrl = "http://127.0.01:3001/api"
  dummyWeatherIcon = "http://127.0.0.1:3001/cloudy.png"
```

## Notes

1. I should figure out how to hover (over the temperature scale) using React inline styling (or use something else!).
