import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={12} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={99} hairColor="Brown" />
    </div>
  );
}

export default App;