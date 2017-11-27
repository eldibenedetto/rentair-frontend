export default function reservationReducer(state = { pendingReservations: [], approvedReservations:[], pendingLoading: false, pendingLoaded: false, approvedLoading: false, approvedLoaded: false, statusMessage: "" }, action) {
  switch (action.type) {
    case 'ADD_PENDING_RESERVATION':
      return {...state, pendingReservations: [...state.pendingReservations, action.payload]}
    case 'GETTING_PENDING_RESERVATIONS':
      return {...state, pendingLoading: true}
    case "GET_PENDING_RESERVATIONS":
      return {...state, pendingReservations: action.payload, pendingLoading: false, pendingLoaded: true}
    case 'APPROVE_RESERVATION':
      return {...state, approvedReservations: [...state.approvedReservations, action.payload]}
    case "GETTING_APPROVED_RESERVATIONS":
      return {...state, approvedLoading: true}
    case 'GET_APPROVED_RESERVATIONS':
      return {...state, approvedReservations: action.payload, approvedLoading: false, approvedLoaded: true}
      case 'ADD_APPROVED_RESERVATION':
        return {...state, approvedReservations: [...state.approvedReservations, action.payload]}
      case 'NEW_STATUS_MESSAGE':
        return {...state, statusMessage: action.payload}
    default:
      return state
  }
}
