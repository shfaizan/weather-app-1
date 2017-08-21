import { toCelsius, toFahrenheit } from "./pure-functions"

test("converts a temperature from fahrenheit to celsius", () => {
  expect(toCelsius(212)).toBe(100.0)
})

test("converts a temperature from celsius to fahrenheit", () => {
  expect(toFahrenheit(100)).toBe(212.0)
})

test("reversing a temperature convertions works", () => {
  expect(toCelsius(toFahrenheit(100))).toBe(100.0)
})
