export function loginUser(email, password) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({user: {email, password}})
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw res
      }
    })
    .then(json =>
      dispatch(setCurrentUser({user: json.user, token: json.token}))
    )
    .catch(error => error.json())
    .then(jsonError => {
        dispatch(failedLogin(jsonError))
    })
  }
}

export function failedLogin(jsonError) {
  return {
    type: 'FAILED_LOGIN',
    payload: jsonError
  }
}

export function getCurrentUser(userID) {
  return (dispatch) => {
    dispatch(gettingUser())
    fetch ('http://localhost:3000/api/v1/currentuser', {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(setCurrentUser({user: json.user, token: json.token}))
    })
  }
}

export function gettingUser() {
  return {
    type: 'GETTING_USER'
  }
}

export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}

export function signUpUser(userData) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(json => {
      dispatch(setCurrentUserSignUp({user: json, token: json.token}))
    })
  }
}

export function setCurrentUserSignUp(userObj) {
  return {
    type: 'SET_CURRENT_USER_SIGN_UP',
    payload: userObj

  }
}

export function setSearchCriteria(searchData) {
  return {
    type: "SET_SEARCH_CRITERIA",
    payload: searchData
  }
}

export function changeToMapView() {
  return {
    type: "CHANGE_VIEW_MAP"
  }
}

export function changeToListView() {
  return {
    type: "CHANGE_VIEW_LIST"
  }
}

export function logoutUser() {
  return {
    type: "LOGOUT_USER"
  }
}

export function setSortType(value) {
  return {
    type: 'SET_SORT_TYPE',
    payload: value
  }
}

export function editUser(userData) {
  return (dispatch) => {
    dispatch(gettingUser())
    fetch('http://localhost:3000/api/v1/user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(userResponse => {
      dispatch(updateUserInfo(userResponse))
    })
  }
}

export function updateUserInfo(userResponse) {
  return {
    type: 'UPDATE_USER_INFO',
    payload: userResponse
  }
}

export function deleteUser(userID) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/user/delete', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': "Bearer " + localStorage.getItem('token')
      },
      body: JSON.stringify(userID)
    })
    .then(res => res.json())
    .then(message => {
      dispatch(logoutUser())
    })
  }
}

export function toggleModal() {
  return {
    type: 'TOGGLE_MODAL'
  }
}
