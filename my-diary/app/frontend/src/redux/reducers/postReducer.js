//-------------------------------
// Redux PostReducer
//-------------------------------
import { ADD_POST, DELETE_POST, FETCH_DATA, GET_POST, LOADING, UPDATE_POST } from '../action/types'

const initState = {
  loading: false,
  error: false,
  post: []
}

export const postReducer = (state = initState, action) => {
  switch (action.type)
  {
    case LOADING:
      return { ...state, loading: true }
    case FETCH_DATA:
      return { ...state, loading: false, post: [ action.payload ] }
    case GET_POST:
      return { ...state, loading: false, post: action.payload }
    case ADD_POST:
      return [ ...state, action.payload ]
    case UPDATE_POST:
      return {}
    case DELETE_POST:
      return state.filter(res => res._id !== action.payload)
    default:
      return state
  }
}