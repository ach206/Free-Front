import axios from 'axios'
import { request } from './Helpers'

export const GET_USER = 'GET_USER'
export const GET_AUTH = 'GET_AUTH'

const API = `${process.env.REACT_APP_BACKEND}`

export const getAuth = () => (
  dispatch => {
    axios.get(`${API}/auth/`)
    .then((response) => {
      dispatch({
        type: GET_AUTH,
        payload: response.data.data
      })
    })
  }
)

export const getUser = () => (
  dispatch => {
    axios.get(`${API}/users/`)
    .then((response) => {
      dispatch({
        type: GET_USER,
        payload: response.data.data
      })
    })
  }
)
