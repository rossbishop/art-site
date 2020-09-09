import React from 'react';
import {Header, ProjectGrid, Footer} from './Imports.js'
import Home from './Home'
import ProjectPage from './ProjectPage'
import UserPage from './UserPage'
import ProfileUpdatePage from './ProfileUpdatePage'
import NewProjectPage from './NewProjectPage'
import TestCss from './TestCss'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from"react-router-dom";
import NewRevisionPage from './NewRevisionPage.js';

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

        <Route path="/updateprofile">
          <ProfileUpdatePage />
        </Route>

        <Route path="/newproject">
          <NewProjectPage />
        </Route>

        <Route path="/newrevision">
          <NewRevisionPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </>
  )
}

export default App
