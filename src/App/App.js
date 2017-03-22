import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Canvas from './Canvas'

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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <nav class="navigation">
            <a class="nav-toggle" href="#">
              <span class="trigger">&#9776;</span>
              <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Prices</li>
                <li>Cart</li>
              </ul>
            </a>
          </nav>
        </div>
        <div className="App-body" >
          {this.props.children}
        </div>
        <div className="App-footer">
          <span className='Header'>Welcome to Foggy Boxes <span className='react'>a React App</span></span>
        </div> 
      </div>
    );
  }
}

export default App;
