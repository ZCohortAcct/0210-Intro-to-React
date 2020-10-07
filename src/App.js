import React from 'react';
import logo from './logo.svg';
import './App.css';


export function exampleFn() {
  console.log('from app file')
}


export const anotherFn = () => {
  console.log('from antherFn function')
}

function App() {
  return (
    <div className="App">
      <input />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App
