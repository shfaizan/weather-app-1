/**
 * Gets the GPS location of the user's browser. 
 * Throws an exception if this functionality is not supported,
 * and propagates a PositionError is the GPS request fails.
 * 
 * @returns {object} - latitude and longitude 
 */
const getUserLocation = async () => {
  let latitude
  let longitude
  if (navigator.geolocation) {
    await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          latitude = pos.coords.latitude
          longitude = pos.coords.longitude
          resolve()
        },
        er => {
          reject(er)
        }
      )
    })
  } else {
    throw new Error("Geolocation is not supported by this browser.")
  }
  return { latitude, longitude }
}

export default getUserLocation
