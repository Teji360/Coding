
import './App.css';
import React, { useState } from 'react'
function App() {
  const [count, setCount] =useState(0);
  return (
    <div>
      <p>You have clicked me {count} times </p>

      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
   </div>
  );
}

export default App;
