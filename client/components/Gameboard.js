import React from 'react';
import PropTypes from 'prop-types';

const Gameboard = props => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      <div id="categories">
        <div class="category">
          <div class="categoryTitle">GULLIBLE TRAVELS</div>
          <div class="clueValue">$200</div>
          <div class="clueValue">$400</div>
          <div class="clueValue">$600</div>
          <div class="clueValue">$800</div>
          <div class="clueValue">$1000</div>
        </div>

        <div class="category">
          <div class="categoryTitle">LITTLE WOMEN</div>
          <div class="clueValue">$200</div>
          <div class="clueValue">$400</div>
          <div class="clueValue">$600</div>
          <div class="clueValue">$800</div>
          <div class="clueValue">$1000</div>
        </div>

        <div class="category">
          <div class="categoryTitle">PAIR OF DICE, LOST</div>
          <div class="clueValue">$200</div>
          <div class="clueValue">$400</div>
          <div class="clueValue">$600</div>
          <div class="clueValue">$800</div>
          <div class="clueValue">$1000</div>
        </div>

        <div class="category">
          <div class="categoryTitle">THE SCARLET LETTERS</div>
          <div class="clueValue">$200</div>
          <div class="clueValue">$400</div>
          <div class="clueValue">$600</div>
          <div class="clueValue">$800</div>
          <div class="clueValue">$1000</div>
        </div>

        <div class="category">
          <div class="categoryTitle">HARRY TRUMAN</div>
          <div class="clueValue">$200</div>
          <div class="clueValue">$400</div>
          <div class="clueValue">$600</div>
          <div class="clueValue">$800</div>
          <div class="clueValue">$1000</div>
        </div>
      </div> 
      

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
