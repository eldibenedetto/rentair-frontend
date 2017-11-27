export default function manageUser(state =  { user: null, loggedIn: false, errorMessage: null, loading: false, loaded: false, mapView: false, searchLocation: {lat: 40.7052529, lng: -74.01407030000001}, modalOpen: false, sortType: 'Distance' }, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user_id', action.payload.user.id)
      return {...state, loggedIn: true, user: action.payload.user, loading: false, loaded: true}
    case 'FAILED_LOGIN':
      return {...state, errorMessage: action.payload.message}
    case 'SET_CURRENT_USER_SIGN_UP':
      localStorage.setItem('token', action.payload
      .token)
      localStorage.setItem('user_id', action.payload.user.id.id)
      return {...state, loggedIn: true, user: action.payload.user.id, loading: false, loaded: true}
    case 'GETTING_USER':
      return {...state, loading: true}
    case 'SET_SEARCH_CRITERIA':
      return {...state, location: action.payload.location, reqStartDate: action.payload.req_start_date, reqEndDate: action.payload.req_end_date}
    case 'CHANGE_VIEW_MAP':
      return {...state, mapView: true}
    case 'CHANGE_VIEW_LIST':
      return {...state, mapView: false}
    case 'LOGOUT_USER':
      localStorage.clear()
      return {...state, user: null, loggedIn: false}
    case 'SET_SORT_TYPE':
      return {...state, sortType: action.payload}
    case 'UPDATE_USER_INFO':
      return {...state, user: action.payload, loading: false, loaded: true}
    case 'TOGGLE_MODAL':
      return {...state, modalOpen: !state.modalOpen}
    default:
      return state
  }
}
