/*
  Gets the GPS location of the User using Navigator Geolocation.
  
  Throws an exception if this functionality is not supported.
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
