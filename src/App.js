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
  const [userDetails, setUserDetails] = useState();
  const [userAttribs, setUserAttribs] = useState();

  //Invoke this function only once at first page load (hence empty deps array [])
  useEffect(() => {
    console.log("1. Start auth check")
    checkLoggedIn()
  }, [])

  //Use effect dep is userAttribs as was getting odd issues trying to grab them from the full userDetails state
  useEffect(() => {
    if(userAttribs != undefined){
      setLoggedIn(true);
      setLoading(false);
      console.log('checkLoggedIn SUCCESS: ' + isLoggedIn)  
    }
  },[userAttribs])

  const checkLoggedIn = async() => {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      })
      console.log(user);
      setUserDetails(user);
      setUserAttribs(user.attributes);
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
    "aws_cognito_identity_pool_id": "eu-west-2:1b6cba9b-86c2-4801-8fe1-f65c9fb7137a",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_jjmGjKRfN",
    "aws_user_pools_web_client_id": "35bhchbkg3g73ipjahfuqoe097",
    "oauth": {},
    "aws_appsync_graphqlEndpoint": "https://snc74rybivhphklmfyoqh3vyxm.appsync-api.eu-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "eu-west-2",
    "aws_appsync_authenticationType": isLoggedIn ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM",
    "aws_appsync_apiKey" : "config.aws_appsync_apiKey",
    "aws_cloud_logic_custom": [
        {
            "name": "AdminQueries",
            "endpoint": "https://qkp4snpqb6.execute-api.eu-west-2.amazonaws.com/dev",
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
              return(children)
            }
            else {
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

          <Route path="/project/:id">
            <ProjectPage 
              userAttribs={userAttribs}
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <Route path="/user/:id">
            <UserPage
              userAttribs={userAttribs} 
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}
            />
          </Route>

          {isLoading && (
            <Route path="/profileupdate">
              <LoadingPage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}              
              />
            </Route>
          )}
          {!isLoading && (
            <PrivateRoute path="/profileupdate">
              <ProfileUpdatePage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}
              />
            </PrivateRoute>
          )}

          <Route path="/loading">
            <LoadingPage
              userAttribs={userAttribs}
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}              
            />
          </Route>

          {isLoading && (
            <Route path="/new">
              <LoadingPage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}              
              />
            </Route>
          )}
          {!isLoading && (
            <PrivateRoute path="/new">
              <NewProjectPage
                userAttribs={userAttribs} 
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}            
              />
            </PrivateRoute>
          )}

          {isLoading && (
            <Route path="/newrevision/:id">
              <LoadingPage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}              
              />
            </Route>
          )}
          {!isLoading && (
            <PrivateRoute path="/newrevision">
              <NewRevisionPage
                userAttribs={userAttribs} 
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}
              />
            </PrivateRoute>
          )}

          <Route path="/login">
            <LoginPage
              userAttribs={userAttribs}
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}            
            />
          </Route>

          <Route path="/logout">
            <LogoutPage
              userAttribs={userAttribs} 
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}             
            />
          </Route>

          <Route path="/register">
            <RegisterPage
              userAttribs={userAttribs} 
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}             
            />
          </Route>

          <Route path="/forgot">
            <ForgotPage
              userAttribs={userAttribs} 
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}             
            />
          </Route>

          <Route path="/">
            <Home
              userAttribs={userAttribs} 
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}             
            />
          </Route>

        </Switch>
    </>
  )
}

export default App
