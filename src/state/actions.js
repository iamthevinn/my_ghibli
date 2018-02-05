import axios from 'axios'

export const PAGE_LOAD = "PAGE_LOAD";
export const PEOPLE_RESPONSE_RECEIVED = "PEOPLE_RESPONSE_RECEIVED";
export const PERSON_SELECTED = "PERSON_SELECTED";
export const CLEAR_FILMS = "CLEAR_FILMS"
export const FILM_LOADING = "FILM_LOADING"
export const FILM_RESPONSE_RECEIVED = "FILM_RESPONSE_RECEIVED"

function loadPeople() {
  return (dispatch, getState, api) => {
    const promise = axios.get(api);

    promise.then(data => {
      dispatch({ type: PEOPLE_RESPONSE_RECEIVED, payload: data.data })

    }, () => { })

    promise.catch(data => {
      dispatch({ type: PEOPLE_RESPONSE_RECEIVED, payload: data.data })

    })
  }
}

function getFilmsAndDescriptionsFromURLs(filmURL) {
  return (dispatch, getState, api) => {
    dispatch({ type: FILM_LOADING });

    const promise = axios.get(filmURL);

    promise.then(data => {
      dispatch({ type: FILM_RESPONSE_RECEIVED, payload: data.data });
    }, () => { })

    promise.catch(data => {
      dispatch({ type: FILM_RESPONSE_RECEIVED, payload: data.data });
    })
  }
}

export { loadPeople, getFilmsAndDescriptionsFromURLs }
