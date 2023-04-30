import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quiz from '../components/Quiz';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get('/api/questions');
      setQuestions(response.data);
    };
    fetchQuestions();
  }, []);

  const handleGrade = (newScore) => {
    setScore(newScore);
  };

  return (
    <div>
      {score != null ? (
        <h1>Your score: {score}</h1>
      ) : (
        <Quiz questions={questions} onGrade={handleGrade} />
      )}
    </div>
  );
}

export default QuizPage;

