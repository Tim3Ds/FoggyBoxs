import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from '../Form'
import Canvas from '../Canvas'

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
