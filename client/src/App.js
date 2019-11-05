import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css'

import Home from './components/Pages/Home'
import Details from './components/Pages/Details'
import NotFound from './components/NotFound'

export class App extends Component {
  
  componentDidMount() {
    M.AutoInit()
  }
  
  render() {
    return  <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/details/:recipeId" component={Details} />
              <Route component={NotFound} />
            </Switch>
  }
}

export default App
