import React from 'react';
import {Header, ProjectGrid, Footer} from './Imports.js'
import Home from './Home'
import ProjectPage from './ProjectPage'
import UserPage from './UserPage'
//import ProfileUpdatePage from './ProfileUpdatePage'
import TestCss from './TestCss'

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
        <Route path="/testcss">
          <TestCss />
        </Route>

        <Route path="/projectpage">
          <ProjectPage />
        </Route>

        <Route path="/userpage">
          <UserPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
        
        {/*<Route path="/updateprofile">
          <ProfileUpdatePage />
        </Route>
        */}

      </Switch>
    </>
  )
}

export default App
