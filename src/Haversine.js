export const haversineFunction = (searchLat, searchLng, carLat, carLng) => {
  var haversine = require('haversine')
  let start = {
    latitude: searchLat,
    longitude: searchLng
  }
  let end = {
    latitude: carLat,
    longitude: carLng
  }
  const haversineCoords = (haversine(start, end, {unit: 'mile'}))
  if (searchLat === "" || searchLng === ""){
    return "...Calculating"
  } else {
    if (carLat === null || carLng === null){
      return 'No Location Data'
    } else {
      return Math.round(haversineCoords * 10) / 10
    }
  }
}
