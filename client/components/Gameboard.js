import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue'
import Categories from './Categories'

const Gameboard = props => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      <Categories categories={props.categories} selectQuestion={props.selectQuestion} currentQuestion={props.currentQuestion} answeredQuestions={props.answeredQuestions} /> 
      

      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
