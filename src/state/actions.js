import axios from 'axios'

export const PAGE_LOAD = "PAGE_LOAD";
export const PEOPLE_RESPONSE_RECEIVED = "PEOPLE_RESPONSE_RECEIVED";
export const PERSON_SELECTED = "PERSON_SELECTED";
export const CLEAR_FILMS = "CLEAR_FILMS"
export const FILM_LOADING = "FILM_LOADING"
export const FILM_RESPONSE_RECEIVED = "FILM_RESPONSE_RECEIVED"

function loadUsers() {
  return (dispatch, getState, api) => {
    axios.get('http://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users')
      .then(({ data: users }) => {
        dispatch({type: USER_FETCH_SUCCESS, payload: users})
      })
  }
}

function deleteUserFromList(userId){
  return (dispatch, getState, api) => {
  axios.delete('http://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users/' + userId)
    .then((response) => {
      dispatch({type: DELETE_USER, payload: response.data})
      dispatch(loadUsers())
    }
    )
  }
}

export { loadUsers, deleteUserFromList }
