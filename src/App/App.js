import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
          <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
          <span className="nav-toggle" href="#">
            <span className="trigger">&#9776;</span>
            <lu>
              <li><Link to="/Game">Game</Link></li>
              <li><Link to="/Setup">Setup</Link></li>
            </lu>
          </span>
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
