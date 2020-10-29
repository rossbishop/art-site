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
import * as queries from './graphql/queries'

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
  const [projectData, setProjectData] = useState();
  const [projectDataLoaded, setProjectDataLoaded] = useState();

  //Invoke this function only once at first page load (hence empty deps array [])
  useEffect(() => {
    console.log("1. Start auth check")
    checkLoggedIn()
    if(window.location.pathname.split('/')[1] == "newrevision")
    {
      getProject()
    }
  }, [])

  //Use effect dep is userAttribs as was getting odd issues trying to grab them from the full userDetails state
  useEffect(() => {
    if(userAttribs != undefined){
      setLoggedIn(true);
      setLoading(false);
      console.log('checkLoggedIn SUCCESS: ' + isLoggedIn)  
    }
    
    if(projectData != undefined){
      setProjectDataLoaded(true);
    }
  },[userAttribs,projectData])

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
  // Amplify.configure({
  //   "aws_project_region": "eu-west-2",
  //   "aws_cognito_identity_pool_id": "eu-west-2:1b6cba9b-86c2-4801-8fe1-f65c9fb7137a",
  //   "aws_cognito_region": "eu-west-2",
  //   "aws_user_pools_id": "eu-west-2_jjmGjKRfN",
  //   "aws_user_pools_web_client_id": "35bhchbkg3g73ipjahfuqoe097",
  //   "oauth": {},
  //   "aws_appsync_graphqlEndpoint": "https://b5yt7lrlsbbwpbjwk47la7zjgy.appsync-api.eu-west-2.amazonaws.com/graphql",
  //   "aws_appsync_region": "eu-west-2",
  //   "aws_appsync_authenticationType": isLoggedIn ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM",
  //   "aws_appsync_apiKey" : "config.aws_appsync_apiKey",
  //   "aws_cloud_logic_custom": [
  //       {
  //           "name": "AdminQueries",
  //           "endpoint": "https://qkp4snpqb6.execute-api.eu-west-2.amazonaws.com/dev",
  //           "region": "eu-west-2"
  //       }
  //   ]
  // })

//   Amplify.configure({
//     "aws_project_region": "eu-west-2",
//     "aws_cloud_logic_custom": [
//         {
//             "name": "AdminQueries",
//             "endpoint": "https://kmyvxsvwaj.execute-api.eu-west-2.amazonaws.com/devnew",
//             "region": "eu-west-2"
//         }
//     ],
//     "aws_appsync_graphqlEndpoint": "https://b5yt7lrlsbbwpbjwk47la7zjgy.appsync-api.eu-west-2.amazonaws.com/graphql",
//     "aws_appsync_region": "eu-west-2",
//     "aws_appsync_authenticationType": isLoggedIn ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM",
//     "aws_cognito_identity_pool_id": "eu-west-2:b084fc1e-fdae-4ddc-a13b-587ca1f5f550",
//     "aws_cognito_region": "eu-west-2",
//     "aws_user_pools_id": "eu-west-2_60hxfeWpC",
//     "aws_user_pools_web_client_id": "3cmddfi26mh03clu3pjqilslh9",
//     "oauth": {},
//     "aws_user_files_s3_bucket": "artsiteimagebucket193639-devgithub",
//     "aws_user_files_s3_bucket_region": "eu-west-2"
// });

  Amplify.configure({    
    "aws_project_region": "eu-west-2",
    "aws_cloud_logic_custom": [
        {
            "name": "AdminQueries",
            "endpoint": "https://35wfco8lk0.execute-api.eu-west-2.amazonaws.com/devgithub",
            "region": "eu-west-2"
        }
    ],
    "aws_appsync_graphqlEndpoint": "https://nljmq4ky4bfavb43bjic7t5ohe.appsync-api.eu-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "eu-west-2",
    "aws_appsync_authenticationType": isLoggedIn ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM",
    "aws_cognito_identity_pool_id": "eu-west-2:22687550-9667-4484-844b-dbbdcef04dc9",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_coy8PlFAm",
    "aws_user_pools_web_client_id": "45n017qv1agn40ppl2mt2l45n5",
    "oauth": {},
    "aws_user_files_s3_bucket": "artsiteimagebucket193639-devgithub",
    "aws_user_files_s3_bucket_region": "eu-west-2"
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

  function PrivatePermissionRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
          render={({ location }) => {
            if(isLoggedIn) {
              console.log("CONFIRMED LOGGED IN!")
              if(userDetails.username == projectData.owner) {
                console.log("IS PROJECT OWNER!!!")
                return(children)
              }
              else {
                console.log("NOT PROJECT OWNER!!!")
                return(
                  <Redirect
                    to={{
                      pathname: "/",
                      state: { from: location }
                    }}
                  />
                )
              }
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

  const getProject = async (uuid) => {
    try {
        uuid = await (window.location.pathname.split('/'))[2]
        console.log(uuid)
        const apiCall = await API.graphql({query: queries.getProject, variables: {id: uuid}})
        console.log(apiCall)
        setProjectData(apiCall.data.getProject)
    }
    catch (error) {
        console.log('Error getting project REVISIONPAGE: ', error)
    }
    finally {
        
    }
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
          {!isLoading && projectDataLoaded && (
            <PrivatePermissionRoute path="/newrevision/:id">
              <NewRevisionPage
                userAttribs={userAttribs} 
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}
              />
            </PrivatePermissionRoute>
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
