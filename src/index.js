import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Game from './Canvas';
import Form from './Form';
import Body from './App/Body'
import './index.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Body}/>
      <Route path="/Game" component={Game}/>
      <Route path="/Setup" component={Form}/>
    </Route>
  </Router>
),document.getElementById('root'));
