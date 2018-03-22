import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/button/button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>  
        <MyButton onClick={()=>{console.log('teste');}}></MyButton>     
      </div>
    );
  }
}

export default App;
