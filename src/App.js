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
import RegisterPage from './RegisterPage'
import ForgotPage from './ForgotPage'
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
//import awsconfig from './aws-exports';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from"react-router-dom";
import NewRevisionPage from './NewRevisionPage.js';

Amplify.configure(
  {
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        //identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

        // REQUIRED - Amazon Cognito Region
        region: 'eu-west-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        //identityPoolRegion: 'XX-XXXX-X',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-west-2_YlAzSE1YQ',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '36m2ul34qqlufmf5boonlfvbg3',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        //mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        //cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        //    domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
        //    path: '/',
        // OPTIONAL - Cookie expiration in days
        //    expires: 365,
        // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        //    sameSite: "strict" | "lax",
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
        //    secure: true
        //},

        // OPTIONAL - customized storage object
        //storage: MyStorage,

        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        //authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        //clientMetadata: { myCustomKey: 'myCustomValue' },

        // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'art-site.auth.eu-west-2.amazoncognito.com',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
          }
      }
  }
);

//const currentConfig = Auth.configure();

function App() {

  //const [isLoggedIn, setLoggedIn] = useState();

  // useEffect(() => {
  //   console.log('Is Logged In Run 1: ' + isLoggedIn)
  //   checkLoggedIn()
  //   console.log('Is Logged In Run 2: ' + isLoggedIn)
  // }, [isLoggedIn])

  function checkLoggedIn() {
    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
    .then(user => {
        console.log(user);
        return true;
        //setLoggedIn(true);
        //console.log('checkLoggedIn SUCCESS: ' + isLoggedIn)
    })
    .catch(err => {
        console.log(err);
        return false;
        //setLoggedIn(false);
        //console.log('checkLoggedIn ERROR: ' + isLoggedIn)
    });
  }

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
          render={({ location }) => {
            var isLoggedInVar = checkLoggedIn();
            console.log(isLoggedInVar);
            if(isLoggedInVar === 'yes') {
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

          <PrivateRoute path="/updateprofile">
            <ProfileUpdatePage />
          </PrivateRoute>

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

//export default withAuthenticator(App);
export default App
