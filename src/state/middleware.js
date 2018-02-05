import {PAGE_LOAD,
    PEOPLE_RESPONSE_RECEIVED,
    FILM_LOADING,
    FILM_RESPONSE_RECEIVED
} from './actions'
import axios from 'axios'


export function loadPeople() {
    return (dispatch, getState, api) => {
      dispatch({type: PAGE_LOAD});
      const promise = axios.get(api)
      promise.then(({ data: people }) => {
        dispatch({ type: PEOPLE_RESPONSE_RECEIVED, payload: people })
      }, () => { })
  
      promise.catch(({ data: people }) => {
        dispatch({ type: PEOPLE_RESPONSE_RECEIVED, payload: null })
  
      })
    }
  }
  
  export function getFilmsAndDescriptionsFromURLs(filmURL) {
    return (dispatch, getState, api) => {
      dispatch({ type: FILM_LOADING });
  
      const promise = axios.get(filmURL);
  
      promise.then(({ data: films }) => {
        dispatch({ type: FILM_RESPONSE_RECEIVED, payload: films });
      }, () => { })
  
      promise.catch(({ data: films }) => {
        dispatch({ type: FILM_RESPONSE_RECEIVED, payload: films });
      })
    }
  }