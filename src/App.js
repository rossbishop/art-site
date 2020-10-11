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
  const [isLoading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(false);

  //Invoke this function only once at first page load (hence empty deps array [])
  useEffect(() => {
    console.log("1. Start auth check")
    checkLoggedIn()
  }, [])

  const checkLoggedIn = async() => {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      })
      console.log(user);
      setLoggedIn(true);
      setLoading(false);
      setUserDetails(user);
      console.log('checkLoggedIn SUCCESS: ' + isLoggedIn)  
    }
    catch(err) {
      console.log(err);
      setLoggedIn(false);
      setLoading(false);
      setUserDetails(false);
      console.log('checkLoggedIn ERROR: ' + isLoggedIn)
    }

  }

  //Amplify.configure(awsconfig);
  Amplify.configure({
    "aws_project_region": "eu-west-2",
    "aws_cognito_identity_pool_id": "eu-west-2:d058ff0a-6b64-43f0-94a8-db6bd586c1df",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_ajTX2hSlK",
    "aws_user_pools_web_client_id": "7g5gsqmbbbah3p2laqihh1vd75",
    "oauth": {},
    "aws_appsync_graphqlEndpoint": "https://eghgopnuszhfvm4ncxdlb7ywtq.appsync-api.eu-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "eu-west-2",
    "aws_appsync_authenticationType": isLoggedIn ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM",
    "aws_appsync_apiKey" : "config.aws_appsync_apiKey",
    "aws_cloud_logic_custom": [
        {
            "name": "AdminQueries",
            "endpoint": "https://fhjvobq522.execute-api.eu-west-2.amazonaws.com/dev",
            "region": "eu-west-2"
        }
    ]
  })

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

          <Route path="/project/:id">
            <ProjectPage 
            userDetails={userDetails}
            isLoggedIn={isLoggedIn}
            />
          </Route>

          <Route path="/user/:id">
            <UserPage />
          </Route>

          {isLoading && (
            <Route path="/updateprofile">
              <LoadingPage />
            </Route>
          )}
          {!isLoading && (
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
