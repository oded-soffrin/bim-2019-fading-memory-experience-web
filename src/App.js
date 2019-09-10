import React from 'react';
import './App.css';
import Button from './components/button'

function App() {

  return (
    <div className="App">
      <div className="App-logo" alt="logo">
          BIM
        </div>
      <header className="App-header">
        <p>Welcome!</p>
        
        <Button
          label={'Start!'}
        />
        
      </header>
      
      
    </div>
  );
}

export default App;
