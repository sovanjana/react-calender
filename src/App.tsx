import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumberFieldComponent from './components/NumberFieldComponent';
import PhoneNoFieldComponent from './components/PhoneNoFieldComponent';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />        
      </header>
      <main>
        <NumberFieldComponent />
        <PhoneNoFieldComponent />
      </main>
    </div>
  );
}

export default App;
