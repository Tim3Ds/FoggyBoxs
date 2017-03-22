import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Game from './App/Canvas'
import Form from './App/Form'
import './index.css';

import { Router, Route, Link } from 'react-router'

render((
  <Router App={Link}>
    <Route path="/" component={App}/>
      <Route path="/Game" component={Game}/>
      <Route path="/Setup" component={Form}/>
  </Router>
),document.getElementById('root'));
