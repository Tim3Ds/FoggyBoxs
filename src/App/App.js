import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from '../Form';
import Canvas from '../Canvas';
import { Link } from 'react-router';

class App extends Component {
  constructor(props){
    super(props);
    this.logInfo = this.logInfo.bind(this);
  }
  logInfo = (info)=>{
    console.log(info);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a class="nav-toggle" href="#">
            <span class="trigger">&#9776;</span>
            <Link to="/Game">Game</Link>
            <Link to="/Setup">Setup</Link>
          </a>
        </header>
        <section className="App-body" >
          {this.props.children}

        </section>
        <footer className="App-footer">
          <span className='Header'>Welcome to Foggy Boxes <span className='react'>a React App</span></span>
        </footer> 
      </div>
    );
  }
}

export default App;
