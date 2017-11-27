import { haversineFunction } from '../Haversine'
export function getCarSearchData(searchCriteria) {
  return (dispatch) => {
    dispatch(gettingCars())
    fetch('http://localhost:3000/api/v1/search', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(searchCriteria)
    })
    .then(res => res.json())
    .then(carData => {
      if (carData.message) {
        dispatch(carError(carData))
      } else {
        carData.map(car => {
          car.distance = haversineFunction(searchCriteria.location.lat, searchCriteria.location.lng, car.latitude, car.longitude)
          return car
        })
        dispatch(setCarData(carData))
      }
    })
  }
}

export function getCarData() {
  return (dispatch) => {
    dispatch(gettingCars())
    fetch('http://localhost:3000/api/v1/cars')
    .then(res => res.json())
    .then(carData => {
      dispatch(setCarData(carData))
    })
  }
}

export function setCarData(carData) {
  return {
    type: "GET_CARS",
    payload: carData
  }
}

export function addCar(newCarData) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/cars', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify(newCarData)
    })
    .then(res => res.json())
    .then(newCar => {
      dispatch(addCarData(newCar))
    })
  }
}

export function addCarData(newCar) {
  return {
    type: "ADD_CAR",
    payload: newCar
  }
}

export function selectCar(carData) {
  return {
    type: "SELECT_CAR",
    payload: carData
  }
}

export function gettingCars() {
  return {
    type: "GETTING_CARS"
  }
}

export function carError(message) {
  return {
    type: "CAR_ERROR",
    payload: message
  }
}

export function deleteCar(carID) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/car', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify(carID)
    })
    .then(res => res.json())
    .then(carResponse => {
      dispatch(setCarData(carResponse))
    })
  }
}

export function setStatusMessage(message) {
  return {
    type: "SET_STATUS_MESSAGE",
    payload: message
  }
}

export function getSelectedCarData(carID) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/car/${carID}`)
    .then(res => res.json())
    .then(carResponse => {
      dispatch(setSelectedCar(carResponse))
    })
  }
}

export function setSelectedCar(carResponse) {
  return {
    type: 'SELECTED_CAR',
    payload: carResponse
  }
}

export function editCar(carData) {
  return(dispatch) => {
    dispatch(gettingCars())
    fetch('http://localhost:3000/api/v1/car/update', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify(carData)
    })
    .then(res => res.json())
    .then(carResponse => {
      dispatch(updateSelectedCar(carResponse))
    })
  }
}

export function updateSelectedCar(carResponse) {
  return {
    type: 'UPDATE_SELECTED_CAR',
    payload: carResponse
  }
}
