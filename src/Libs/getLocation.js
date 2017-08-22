let latitude
let longitude
let got_location = true
let error_message

const getLocation = async () => {
  if (navigator.geolocation) {
    await new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(
        pos => {
          latitude = pos.coords.latitude
          longitude = pos.coords.longitude
          res()
        },
        er => {
          getError(er)
          rej(er)
        }
      )
    )
  } else {
    got_location = false
    error_message = "Geolocation is not supported by this browser."
  }
}

const getError = error => {
  got_location = false
  switch (error.code) {
  case error.PERMISSION_DENIED:
    error_message = "User denied the request for Geolocation."
    break
  case error.POSITION_UNAVAILABLE:
    error_message = "Location information is unavailable."
    break
  case error.TIMEOUT:
    error_message = "The request to get user location timed out."
    break
  case error.UNKNOWN_ERROR:
  default:
    error_message = "An unknown error occurred."
    break
  }
}

const getUserLocation = async () => {
  await getLocation()
  return got_location
    ? { latitude, longitude, error: null }
    : { latitude: null, longitude: null, error: error_message }
}

export default getUserLocation
