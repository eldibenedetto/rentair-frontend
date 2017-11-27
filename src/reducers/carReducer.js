export default function carReducer(state = {cars: [], loading: false, carSelected: false, loaded: false}, action) {
  switch (action.type) {
    case 'GET_CARS':
      return {...state, cars: action.payload, loading: false, loaded: true}
    case 'ADD_CAR':
      return {...state, cars: [...state.cars, action.payload]}
    case 'SELECT_CAR':
      return {...state, selectedCar: action.payload}
    case 'SELECTED_CAR':
      return {...state, selectedCar: action.payload}
    case 'GETTING_CARS':
      return {...state, loading: true}
    case 'CAR_ERROR':
      return {...state, loading: false, message: action.payload.message}
    case 'SET_STATUS_MESSAGE':
      return {...state, statusMessage: action.payload}
    case 'UPDATE_SELECTED_CAR':
      return {...state, selectedCar: action.payload}
    default:
      return state
  }
}
