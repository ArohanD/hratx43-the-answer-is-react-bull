import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue'
import Category from './Category'

const Categories = props => {
  return (
    <div id={'categories'} data-testid="categoryList">
      {props.categories.map(categoryBucket =>
          <Category title={categoryBucket.title} selectQuestion={props.selectQuestion} currentQuestion={props.currentQuestion} answeredQuestions={props.answeredQuestions} categoryBucket={categoryBucket.clues}/> 
        )}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
