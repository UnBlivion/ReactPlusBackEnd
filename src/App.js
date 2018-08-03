import React, { Component } from 'react';
import './App.css';
import Cadastro from './cadastro/Cadastro';
import Login from './login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cadastro />
      </div>
    );
  }
}

export default App;