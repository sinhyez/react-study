//-------------------------------
// Redux RootReducer
//-------------------------------


import { combineReducers } from 'redux'
import { errorReducer } from './errorReducer'
import { postReducer } from './postReducer'

const rootReducer = combineReducers({
  post: postReducer,
  error: errorReducer
})

export default rootReducer