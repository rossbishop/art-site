import React from 'react';
import {Header, ProjectGrid, Footer} from './Imports.js'
import Home from './Home'
import ProjectPage from './ProjectPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from"react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/projectpage">
          <ProjectPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
