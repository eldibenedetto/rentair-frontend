export function createPendingReservation(reservationData) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/pendingreservations', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify(reservationData)
    })
    .then(res => res.json())
    .then(newPendingReservation => {
      dispatch(addPendingReservation(newPendingReservation))
    })
  }
}

export function addPendingReservation(newReservation) {
  return {
    type: "ADD_PENDING_RESERVATION",
    payload: newReservation
  }
}

export function getPendingReservations() {
  return (dispatch) => {
    dispatch(gettingPendingReservations())
    fetch('http://localhost:3000/api/v1/pendingreservations')
    .then(res => res.json())
    .then(reservationData => {
      dispatch(setPendingReservationData(reservationData))
    })
  }
}

export function gettingPendingReservations() {
  return {
    type: 'GETTING_PENDING_RESERVATIONS'
  }
}

export function setPendingReservationData(reservationData) {
  return {
    type: "GET_PENDING_RESERVATIONS",
    payload: reservationData
  }
}

export function gettingApprovedReservations() {
  return {
    type: 'GETTING_APPROVED_RESERVATIONS'
  }
}

export function setApprovedReservationData(reservationData) {
  return {
    type: 'GET_APPROVED_RESERVATIONS',
    payload: reservationData
  }
}

export function getApprovedReservations() {
  return (dispatch) => {
    dispatch(gettingApprovedReservations())
    fetch('http://localhost:3000/api/v1/reservations')
    .then(res => res.json())
    .then(reservationData => {
      dispatch(setApprovedReservationData(reservationData))
    })
  }
}

export function approveReservation(reservationData) {
  return (dispatch) => {
    dispatch(gettingApprovedReservations())
    fetch('http://localhost:3000/api/v1/reservations', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify(reservationData)
      })
      .then(res => res.json())
      .then(reservationInfo => {
        dispatch(addApprovedReservation(reservationInfo))
    })
  }
}

export function addApprovedReservation(reservationInfo) {
  return {
    type: 'ADD_APPROVED_RESERVATION',
    payload: reservationInfo
  }
}

export function deletePendingReservation(reservationData) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/pendingreservation', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify(reservationData)
    })
    .then(res => res.json())
    .then(message => {
      dispatch(newStatusMessage(message))
    })
  }
}

export function newStatusMessage(message) {
  return {
    type: 'NEW_STATUS_MESSAGE',
    payload: message
  }
}
