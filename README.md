# How to Run the React Weather App

During development the weather app was tested using a local dummy JSON server; this supports the JSON data format used by the APIXU weather service. To run both the front-end and dummy server use the command:

```
yarn start-all
```

However, the app is now fetches live weather data from the [APIXU](http://www.apixu.com) weather service. So to run the app, sign up to get your own API key - copying it into the source directory - then simply type the yarn command:

```
yarn start
```

Enjoy!

## Notes

1. It would be nice to allow the user to change the location!
2. I should figure out how to hover (over the temperature scale) using React inline styling (or use something else!).
