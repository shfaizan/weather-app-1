const body = document.querySelector('body')

const prefix = 'https://source.unsplash.com/'
const dimensions = '1500x1500'
const weatherMap = new Map()
  .set('sun', 'T7K4aEPoGGk')
  .set('clear', 'ln5drpv_ImI')
  .set('snow', 'SH4GNXNj1RA')
  .set('rain', 'pv2ZlDfstXc')
  .set('wind', '7e_gFC2Ce04')
  .set('overcast', 'qjSyQqqzKMg')
  .set('cloud', 'LZfpD7ckSOE')
  .set('fog', '-pCHz5XiMb0')
  .set('mist', '-pCHz5XiMb0')
  .set('drizzle', 'rWwj4zcOcIs')

const weatherKeys = Array.from(weatherMap.keys())

/**
 * Updates the background cover image according to given weather key
 */
export const showWeather = (weather = 'sun') => {
  if (weatherMap.has(weather)) {
    const imageId = weatherMap.get(weather)
    body.style.backgroundImage = `url(${prefix}${imageId}/${dimensions})`
  }
}

/**
 * Searches the weather conditions string for a possible matching key.
 * Returns the found key, if any.
 * 
 * @param {string} condition the weather conditions
 */
export const findWeather = condition => {
  const text = condition.toLowerCase()
  const result = weatherKeys.find(key => text.includes(key))
  return result ? result : 'sun' // default to sunny image
}

export default showWeather
