import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem vindo ao Morar Bem</h1>
        </header>
        <p className="App-intro">
          Insira a localidade da sua próxima residência
        </p>
        <form>
          <input type="text" name="location"/>
          <input type="submit" value="Pesquisar"/>
        </form>
      </div>
    );
  }
}

export default App;
