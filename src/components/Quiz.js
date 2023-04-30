import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import axios from 'axios';

function Quiz({ questions, onGrade }) {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [gradedQuestions, setGradedQuestions] = useState([]);
  const [isGraded, setIsGraded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/grade', { quizQuestions: questions, userAnswers });
    const { gradedQuestions, score } = response.data;
    setGradedQuestions(gradedQuestions);
    onGrade(score);
    setIsGraded(true);
  };

  const handleChange = (index, answer) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = answer;
    setUserAnswers(newUserAnswers);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          answer={userAnswers[index]}
          gradedQuestion={gradedQuestions[index]}
          onChange={(answer) => handleChange(index, answer)}
        />
      ))}
      <button type="submit">Submit</button>
      {isGraded && (
        <div>
          <h2>Feedback:</h2>
          <ul>
            {gradedQuestions.map((question, index) => (
              <li key={index}>
                {question.text} ({question.isCorrect ? 'Correct' : 'Incorrect'})
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
  onGrade: PropTypes.func.isRequired,
};

export default Quiz;

