import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux';
import {
  CLEAR_FILMS
} from "./state/actions"

class Films extends Component {

  render() {
    if (this.props.films && this.props.personSelected) {
      return (
        <div className="bottom">
          <div className="filmDescLabel">
            <label>Film Description(s)</label>
          </div>
          <div className="filmDescriptions">
            {this.props.films.map((film) => { return <div className="film" key={film.id}>{film.title}: {film.description}</div> })}
          </div>
          <div className="clearButton">
            <button onClick={this.props.clearFilms}>Clear</button>
          </div>
        </div>
      );
    }
    return null;
  }
}


const mapStateToProps = (state) => {
  return {
    personSelected: state.personSelected,
    films: state.films,
    loadingFilmDataStatus: state.loadingFilmDataStatus
  };
};



const mapDispatchToProps = (dispatch) => {

  return {
    clearFilms() {
      dispatch({ type: CLEAR_FILMS })
    }
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
