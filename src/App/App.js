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
          <nav className="navigation">
            <div className="nav-toggle" href="#">
              <span className="trigger">&#9776;</span>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Game" activeStyle={{ background: 'white' }}>Game</Link></li>
                <li><Link to="/Setup" activeStyle={{ background: 'white' }}>Setup</Link></li>
              </ul>
            </div>
          </nav>
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
