/*
	Filename: 		App.js
	Description: 	Primary React functional component used to configure most application settings and perform page routing
	Author: 		Ross Bishop
*/

import React, { useEffect, useState } from "react"

import Home from "./Home"
import ProjectPage from "./ProjectPage"
import UserPage from "./UserPage"
import ProfileUpdatePage from "./ProfileUpdatePage"
import NewProjectPage from "./NewProjectPage"
import LoginPage from "./LoginPage"
import LogoutPage from "./LogoutPage"
import LoadingPage from "./Loading"
import RegisterPage from "./RegisterPage"
import ForgotPage from "./ForgotPage"
import NewRevisionPage from "./NewRevisionPage"

import Amplify, { Auth, API } from "aws-amplify"
import awsconfig from "./aws-exports"
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync"
import * as queries from "./graphql/queries"

import { Switch, Route, Redirect, withRouter } from "react-router-dom"

// Create AppSync client
new AWSAppSyncClient({
	url: awsconfig.aws_appsync_graphqlEndpoint,
	region: awsconfig.aws_appsync_region,
	auth: {
		type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
		jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
	}
})

function App() {
	const [isLoggedIn, setLoggedIn] = useState()
	const [isLoading, setLoading] = useState(true)
	const [userDetails, setUserDetails] = useState()
	const [userAttribs, setUserAttribs] = useState()
	const [projectData, setProjectData] = useState()
	const [isNewRevisionPage, setIsNewRevisionPage] = useState(false)
	const [destinationPage, setDestinationPage] = useState()

	// Run auth checks on every fresh page load or if the user auth state is unknown
	// If navigating to new revision page, pre-emptively get user project revision is to be associated with
	// Do this for either React routing or direct URL navigation
	useEffect(() => {
		if (isLoggedIn === undefined || isLoading) {
			checkLoggedIn()
		}
		if (destinationPage !== undefined) {
			if (destinationPage.split("/")[1] === "newrevision") {
				setIsNewRevisionPage(true)
				getProject()
			}
		} else if (window.location.pathname.split("/")[1] === "newrevision") {
			setIsNewRevisionPage(true)
			getProject()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading])

	// If user attributes are loaded, signal user is logged in with state
	// Then check whether page is new revision page or not
	// If new revision page, only disable loading once project data has loaded
	useEffect(() => {
		if (userAttribs !== undefined) {
			setLoggedIn(true)
			if (isNewRevisionPage) {
				if (projectData !== undefined) {
					setLoading(false)
				}
			} else {
				setLoading(false)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userAttribs, projectData])

	// Checks user authentication status via Amplify Auth API
	// If user is authenticated, stores user data in state
	// Otherwise signals user isn't logged in and finishes page load
	const checkLoggedIn = async () => {
		try {
			const user = await Auth.currentAuthenticatedUser({
				bypassCache: false
			})
			setUserDetails(user)
			setUserAttribs(user.attributes)
		} catch (err) {
			console.log(err)
			setLoggedIn(false)
			setLoading(false)
			setUserDetails(false)
			console.log("checkLoggedIn ERROR: " + isLoggedIn)
		}
	}

	// Configures all Amplify settings
	Amplify.configure({
		aws_project_region: "eu-west-2",
		aws_cloud_logic_custom: [
			{
				name: "AdminQueries",
				endpoint: "https://d7632j9wag.execute-api.eu-west-2.amazonaws.com/dev",
				region: "eu-west-2"
			}
		],
		aws_appsync_graphqlEndpoint: "https://ilrrcdnwizhyrjrtlaody6laj4.appsync-api.eu-west-2.amazonaws.com/graphql",
		aws_appsync_region: "eu-west-2",
		aws_appsync_authenticationType: isLoggedIn ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM",
		aws_cognito_identity_pool_id: "eu-west-2:7f795de0-0f2a-4330-845c-7b3c0ff0299c",
		aws_cognito_region: "eu-west-2",
		aws_user_pools_id: "eu-west-2_XVa1uKsF4",
		aws_user_pools_web_client_id: "kmrtiqketfq05fa6abo3sosji",
		oauth: {},
		aws_user_files_s3_bucket: "artsiteimages211106-dev",
		aws_user_files_s3_bucket_region: "eu-west-2"
	})

	// Route which will redirect to login if a user isn't logged in
	function PrivateRoute({ children, ...rest }) {
		return (
			<Route
				{...rest}
				render={({ location }) => {
					if (isLoggedIn) {
						return children
					} else {
						return (
							<Redirect
								to={{
									pathname: "/login",
									state: { from: location }
								}}
							/>
						)
					}
				}}
			/>
		)
	}

	// Route which will check for project ownership as well as login status
	function PrivatePermissionRoute({ children, ...rest }) {
		return (
			<Route
				{...rest}
				render={({ props }) => {
					if (isLoggedIn) {
						if (userDetails.username === projectData.owner) {
							return children
						} else {
							return (
								<Redirect
									to={{
										pathname: "/",
										state: {}
									}}
								/>
							)
						}
					} else {
						return (
							<Redirect
								to={{
									pathname: "/login",
									state: {}
								}}
							/>
						)
					}
				}}
			/>
		)
	}

	// Gets project specified by uuid in URL using a GraphQL query via the Amplify API
	// On success, stores project data in state
	const getProject = async () => {
		try {
			let uuid = ""
			if (destinationPage !== undefined) {
				uuid = await destinationPage.split("/")[2]
			} else {
				uuid = await window.location.pathname.split("/")[2]
			}
			const apiCall = await API.graphql({ query: queries.getProject, variables: { id: uuid } })
			setProjectData(apiCall.data.getProject)
		} catch (error) {
			console.log("Error getting project REVISIONPAGE: ", error)
		}
	}

	return (
		<>
			<Switch>
				<Route
					path="/loading"
					// Loading route used for navigation between all pages, returns loading page while authentication happens
					// After authentication, user is redirected to the page they wished to navigate to
					render={({ props }) => {
						if (isLoading) {
							return <LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
						}
						if (!isLoading) {
							return (
								<Redirect
									to={{
										pathname: destinationPage
									}}
								/>
							)
						}
					}}
				/>

				{/* While loading, display loading page */}
				{isLoading && (
					<Route path="/newrevision/:id">
						<LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
					</Route>
				)}
				{/* Once loaded, display the desired page */}
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
						<LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
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
						<LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
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
						<LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
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
					<LoadingPage userAttribs={userAttribs} userDetails={userDetails} isLoggedIn={isLoggedIn} />
				</Route>

				{isLoading && (
					<Route path="/new">
						<LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
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
						<LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
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
					<LogoutPage userAttribs={userAttribs} userDetails={userDetails} isLoggedIn={isLoggedIn} />
				</Route>

				{isLoading && (
					<Route path="/register">
						<LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
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
						<LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
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
						<LoadingPage userDetails={userDetails} userAttribs={userAttribs} isLoggedIn={isLoggedIn} />
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
