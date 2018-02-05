import {PAGE_LOAD, PEOPLE_RESPONSE_RECEIVED,PERSON_SELECTED,CLEAR_FILMS,FILM_LOADING,FILM_RESPONSE_RECEIVED} from './actions';

const initialState = {
  peopleList: [],
  loadingPeopleStatus: "",
  personSelected: null,
  loadingFilmDataStatus: "",
  films: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_LOAD:
      return { ...state, loadingPeopleStatus: "loading" };
    case PEOPLE_RESPONSE_RECEIVED:
        if (action.payload)
            return { ...state, loadingPeopleStatus: "loaded", peopleList: action.payload };
        else
            return { ...state, loadingPeopleStatus: "horribly wrong" };
    case PERSON_SELECTED:
            return { ...state, personSelected: action.payload, loadingFilmDataStatus: ""};
    case CLEAR_FILMS:
            return { ...state, personSelected: null, loadingFilmDataStatus: "", films:[]}
    case FILM_LOADING:
            return { ...state, loadingFilmDataStatus: "loading"}
    case FILM_RESPONSE_RECEIVED:
                let tempArray = state.films.slice();
                tempArray.push(action.payload)
                return { ...state, loadingFilmDataStatus: "loaded", films: tempArray};
    default:
      return state;
  }
}

export default reducer;