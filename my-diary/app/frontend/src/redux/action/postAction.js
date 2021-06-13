//-------------------------------
// Redux PostAction
//-------------------------------

import axios from 'axios'
import { FETCH_DATA, GET_POST, LOADING } from "./types"

const BASE_URL = 'http://localhost:8090'

const isLoading = () => {
  return {
    type: LOADING,
    loading: true
  }
}

// @desc 모든 목록 불러오기
export const fetchList = () => async dispatch => {
  dispatch(isLoading())
  
  const res = await axios.get(`${BASE_URL}/`)
  try {
    dispatch({
      type: FETCH_DATA,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const getPost = (_id) => async dispatch => {
  dispatch(isLoading())

  const res = await axios.get(`${BASE_URL}/${_id}`)
  try {
    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}