import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  console.log('Rendering Home component');
  return (
    <div>
      <h1>Welcome to the DevOps quiz!</h1>
      <p>Test your knowledge of DevOps by taking this quiz.</p>
      <p>
        <Link to="/quiz">Take the quiz</Link>
      </p>
    </div>
  );
}

export default Home;

