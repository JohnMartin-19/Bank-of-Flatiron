import React from 'react';
import './App.css';
import Transaction from './form';
import Display from './table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         <h1>Welcome to the Bank of Flation</h1>
         <Transaction />
         <Display />
        </p>
        
      </header>
    </div>
  );
}

export default App;
