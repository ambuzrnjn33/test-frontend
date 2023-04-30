import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/QuizPage" element={<QuizPage/>}/>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;

