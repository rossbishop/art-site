import React, { useEffect, useState } from 'react';

import Home from './Home'
import ProjectPage from './ProjectPage'
import UserPage from './UserPage'
import ProfileUpdatePage from './ProfileUpdatePage'
import NewProjectPage from './NewProjectPage'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import LoadingPage from './Loading'
import RegisterPage from './RegisterPage'
import ForgotPage from './ForgotPage'
import NewRevisionPage from './NewRevisionPage';

import Amplify, { Auth, API } from 'aws-amplify';
import awsconfig from './aws-exports';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import * as queries from './graphql/queries'

import {
  Switch,
  Route,
  Redirect,
  withRouter
} from"react-router-dom";

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
  const [isNewRevisionPage, setIsNewRevisionPage] = useState(false);
  const [destinationPage, setDestinationPage] = useState();

  //Invoke this function only once at first page load (hence empty deps array [])
  useEffect(() => {
    if(isLoggedIn == undefined || isLoading)
    {
      checkLoggedIn()
    }
    if(destinationPage != undefined)
    {
      if(destinationPage.split('/')[1] == "newrevision")
      {
        setIsNewRevisionPage(true)
        getProject()
      }
    }
    else if(window.location.pathname.split('/')[1] == "newrevision")
    {
      setIsNewRevisionPage(true)
      getProject()
    }
  }, [isLoading])

  //Use effect dep is userAttribs as was getting odd issues trying to grab them from the full userDetails state
  useEffect(() => {
    if(userAttribs != undefined){
      setLoggedIn(true);
      if(isNewRevisionPage)
      {
        if(projectData != undefined)
        {
          setLoading(false);
        }
      }
      else
      {
        setLoading(false);
      }
    }
    
  },[userAttribs,projectData])

  const checkLoggedIn = async() => {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      })
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
          render={({ props }) => {
            if(isLoggedIn) {
              if(userDetails.username == projectData.owner) {
                return(children)
              }
              else {
                return(
                  <Redirect
                    to={{
                      pathname: "/",
                      state: {  }
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
                    state: {  }
                  }}
                />
              )
            }
          }
        }
      />
    )
  }

  const getProject = async () => {
    try {
        let uuid = ""
        if(destinationPage != undefined)
        {
          uuid = await destinationPage.split('/')[2]
        }
        else
        {
          uuid = await window.location.pathname.split('/')[2]
        }
        const apiCall = await API.graphql({query: queries.getProject, variables: {id: uuid}})
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

        <Route 
          path="/loading"
          render={({props}) => {
            if(isLoading){
              return(
                <LoadingPage
                  userDetails={userDetails}
                  userAttribs={userAttribs}
                  isLoggedIn={isLoggedIn}
                />)
            }
            if(!isLoading){
              return(
                <Redirect
                  to={{
                    pathname: destinationPage
                  }}
                />
              )
            }
          }}

        />

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
            <PrivatePermissionRoute path="/newrevision/:id">
              <NewRevisionPage
                userAttribs={userAttribs} 
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}
                setLoading={setLoading}
                setDestinationPage={setDestinationPage}
              />
            </PrivatePermissionRoute>
          )}

          {isLoading && (
            <Route path="/project/:id">
              <LoadingPage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}              
              />
            </Route>
          )}
          {!isLoading && (
            <Route path="/project/:id">
              <ProjectPage 
                userAttribs={userAttribs}
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}
                setLoading={setLoading}
                setDestinationPage={setDestinationPage}
              />
            </Route>
          )}

          {isLoading && (
            <Route path="/user/:id">
              <LoadingPage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}              
              />
            </Route>
          )}
          {!isLoading && (
            <Route path="/user/:id">
              <UserPage
                userAttribs={userAttribs} 
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}
                setLoading={setLoading}
                setDestinationPage={setDestinationPage}
              />
            </Route>
          )}


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
                setLoading={setLoading}
                setDestinationPage={setDestinationPage}
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
                setLoading={setLoading}
                setDestinationPage={setDestinationPage}            
              />
            </PrivateRoute>
          )}

          {isLoading && (
            <Route path="/login">
              <LoadingPage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}              
              />
            </Route>            
          )}
          {!isLoading && (
            <Route path="/login">
              <LoginPage
                userAttribs={userAttribs}
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}
                setLoading={setLoading}
                setDestinationPage={setDestinationPage}            
              />
            </Route>            
          )}

          <Route path="/logout">
            <LogoutPage
              userAttribs={userAttribs} 
              userDetails={userDetails}
              isLoggedIn={isLoggedIn}             
            />
          </Route>

          {isLoading && (
            <Route path="/register">
              <LoadingPage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}              
              />
            </Route>
          )}
          {!isLoading && (
            <Route path="/register">
              <RegisterPage
                userAttribs={userAttribs} 
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}
                setLoading={setLoading}
                setDestinationPage={setDestinationPage}            
              />
            </Route>            
          )}

          {isLoading && (
            <Route path="/forgot">
              <LoadingPage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}              
              />
            </Route>
          )}
          {!isLoading && (
            <Route path="/forgot">
              <ForgotPage
                userAttribs={userAttribs} 
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}
                setLoading={setLoading}
                setDestinationPage={setDestinationPage}             
              />
            </Route>            
          )}

          {isLoading && (
            <Route path="/">
              <LoadingPage 
                userDetails={userDetails}
                userAttribs={userAttribs}
                isLoggedIn={isLoggedIn}              
              />
            </Route>
          )}
          {!isLoading && (
            <Route path="/">
              <Home
                userAttribs={userAttribs} 
                userDetails={userDetails}
                isLoggedIn={isLoggedIn}
                setLoading={setLoading}
                setDestinationPage={setDestinationPage}            
              />
            </Route>            
          )}

        </Switch>
    </>
  )
}

export default withRouter(App)
