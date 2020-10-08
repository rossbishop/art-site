import React, { useEffect, useState } from 'react';
import {Header, ProjectGrid, Footer} from './Imports.js'
import Home from './Home'
import ProjectPage from './ProjectPage'
import UserPage from './UserPage'
import ProfileUpdatePage from './ProfileUpdatePage'
import NewProjectPage from './NewProjectPage'
import TestCss from './TestCss'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import LoadingPage from './Loading'
import RegisterPage from './RegisterPage'
import ForgotPage from './ForgotPage'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from"react-router-dom";
import NewRevisionPage from './NewRevisionPage.js';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

function App() {

  const [isLoggedIn, setLoggedIn] = useState();
  const [isLoaded, setLoaded] = useState();
  const [isLoading, setLoading] = useState(true);

  //Invoke this function only once at first page load (hence empty deps array [])
  useEffect(() => {
    console.log("1. Start auth check")
    checkLoggedIn()
  }, [])

  useEffect(() => {
    console.log("2. Check if auth complete")
    console.log("   isLoggedIn: " + isLoggedIn)
    if(isLoggedIn != undefined) {
      console.log("3. Auth complete")
      setLoaded(true)
      setLoading(false)
    }
    else{
      console.log("Auth not yet complete...")
    }
  }, [isLoggedIn])

  function checkLoggedIn() {
    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
    .then(user => {
        console.log(user);
        setLoggedIn(true);
        console.log('checkLoggedIn SUCCESS: ' + isLoggedIn)    
    })
    .catch(err => {
        console.log(err);
        setLoggedIn(false);
        console.log('checkLoggedIn ERROR: ' + isLoggedIn)
    });
  }

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
          render={({ location }) => {
            if(isLoggedIn) {
              console.log('RETURNING CHILDRENS!!!');
              return(children)
            }
            else {
              console.log('RETURNING LOGIN PAGE!!!');
              return(
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          }
        }
      />
    )
  }

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

          {isLoading && (
            <Route path="/updateprofile">
              <LoadingPage />
            </Route>
          )}
          {isLoaded && (
            <PrivateRoute path="/updateprofile">
              <ProfileUpdatePage />
            </PrivateRoute>
          )}

          <Route path="/loading">
              <LoadingPage/>
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

          <Route path="/logout">
            <LogoutPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route path="/forgot">
            <ForgotPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
    </>
  )
}

export default App
