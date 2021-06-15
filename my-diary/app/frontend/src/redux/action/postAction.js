//-------------------------------
// Redux PostAction
//-------------------------------
import axios from 'axios'
import history from '../../utils/history'
import { ADD_POST, FAILURE, FETCH_DATA, GET_POST, LOADING } from "./types"

const BASE_URL = 'http://localhost:5000'

const isLoading = () => {
  return { type: LOADING }
}

const isFailed = (err) => {
  return { type:FAILURE, payload: err.response }
}

// @desc 모든 목록 불러오기
export const fetchList = () => async dispatch => {
  dispatch(isLoading())
  try {
    const res = await axios.get(`${BASE_URL}/`)
    return dispatch({ type:FETCH_DATA, payload: res.data })
  } catch (err) {
    dispatch(isFailed(err))
  }
}

// @desc 게시글 한개만 조회하기
export const getPost = (_id) => async dispatch => {
  dispatch(isLoading())
  try {
    const res = await axios.get(`${BASE_URL}/${_id}`)
    dispatch({ type: GET_POST, payload: res.data })
  } catch (err) {
    dispatch(isFailed(err))
  }
}

// @desc 게시글 포스팅
export const addPost = (data) => async dispatch => {
  dispatch(isLoading())
  try {
    const res = await axios.post(`${BASE_URL}/post`, { ...data })
    dispatch({ type: ADD_POST, payload: res.data })
    history.push('/')  
  } catch (err) {
    dispatch(isFailed(err))
  }
}