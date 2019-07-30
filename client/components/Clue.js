import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  if (props.answered) {
    return (
      <div className="clueValue"></div>
    );
  }
  if (props.selected) {
    return (
      <div className="categoryTitle">${props.clueObject.question}</div>
    );
  }
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  return (
    <div onClick={() => {props.selectQuestion(props.clueObject)}} className="clueValue">${props.clueObject.value}</div>
  );
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
