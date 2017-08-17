export const round = number => Number.parseFloat(number.toFixed(1))
export const toCelsius = temp => (temp - 32) * 5 / 9
export const toFahrenheit = temp => temp * 9 / 5 + 32
