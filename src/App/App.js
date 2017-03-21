import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form/Form'
import Canvas from './Canvas/Canvas'

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
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Form getInfo={this.logInfo}>

          </Form>
          <Canvas>

          </Canvas>
        </div>
      </div>
    );
  }
}

export default App;
