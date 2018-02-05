import './App.css'
import React, { Component } from 'react';
import { loadPeople, getFilmsAndDescriptionsFromURLs } from './state/middleware';
import { connect } from 'react-redux';
import female from './img/Female-Avatar.png'
import male from './img/Male-Avatar.png'
import {
  PERSON_SELECTED, CLEAR_FILMS
} from "./state/actions"


class People extends Component {

  componentDidMount() {
    this.props.getPeople()
  }

  getFilmsToDisplay(person) {
    this.props.clearFilms()
    if (person.films.length > 0 && this.props.loadingFilmDataStatus !== "loading") {
      person.films.map((url) => {
        return this.props.getFilms(url)
      })
    }

    this.props.personClicked(person)
  }


  render() {
    let list = null;
    if (this.props.peopleList)
      list = this.props.peopleList.map((person, id) => <img alt="Error." key={id} onClick={() => this.getFilmsToDisplay(person)} src={person.gender === "Female" ? female : male}></img>)
    if (this.props.loadingPeopleStatus === "failed") {
      list = "Failed to load People"
    }
    return (
      <div className="top">
        <div className="peopleContainer">
          {list}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    peopleList: state.peopleList,
    loadingFilmDataStatus: state.loadingFilmDataStatus,
    loadingPeopleStatus: state.loadingPeopleStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(loadPeople()),
    getFilms: (url) => dispatch(getFilmsAndDescriptionsFromURLs(url)),
    personClicked(person) {
      dispatch({ type: PERSON_SELECTED, payload: person })
    },
    clearFilms() {
      dispatch({ type: CLEAR_FILMS })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
