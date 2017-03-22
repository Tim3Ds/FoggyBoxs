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
          <span>Welcome to Foggy Boxes <span>a React App</span></span>
        </div>
        <div className="App-intro">
          <Form getInfo={this.logInfo}></Form>
          <Canvas />

          
        </div>
      </div>
    );
  }
}

export default App;
