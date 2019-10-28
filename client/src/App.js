import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css'

import Home from './components/Pages/Home'
import Details from './components/Pages/Details'

export class App extends Component {
  
  componentDidMount() {
    M.AutoInit()

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

  }
  
  render() {
    return  <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/details/:recipeId" component={Details} />
            </Switch>
  }
}

export default App
