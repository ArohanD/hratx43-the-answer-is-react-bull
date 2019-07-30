import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue'

const Category = props => {
  return (
    <div className={'category'} data-testid="category">
      <div className="categoryTitle">{props.title.toUpperCase()}</div>
      {props.categoryBucket.map(clueItem =>
            <Clue selected={false} selectQuestion={props.selectQuestion} answered={false} clueObject={clueItem} />
          )}
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array,
  categoryBucket: PropTypes.array
};

export default Category;
