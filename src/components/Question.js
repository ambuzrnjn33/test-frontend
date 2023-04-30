import React from 'react';
import PropTypes from 'prop-types';

function Question({ question, answer, gradedQuestion, onChange }) {
  const handleInputChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.choices.map((choice, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={index}
                checked={answer === index}
                onChange={handleInputChange}
              />
              {choice}
            </label>
          </li>
        ))}
      </ul>
      {gradedQuestion && (
        <div>
          <p>
            {gradedQuestion.isCorrect
              ? 'Correct!'
              : `Incorrect. The correct answer is ${question.choices[question.answer]}.`}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.number,
  gradedQuestion: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default Question;

