import React, { useState, useEffect } from 'react';
import Header from './Header'
import ProjectGrid from './ProjectGrid'
import Footer from './Footer'

import { API, graphqlOperation } from 'aws-amplify'
import * as queries from './graphql/queries'

function Home(props) {

    const [projectData, setProjectData] = useState(null)

    const getUserProjects = async () => {
        try {
            //const owner = (window.location.pathname.split('/'))[2]
            //const apiCall = await API.graphql({query: queries.projectByOwnerByDate, variables: {owner: "Russbo", limit: 10, sortDirection: "DESC"}})
            const apiCall = await API.graphql({query: queries.listProjects, variables: {limit: 10}})
            console.log(apiCall)
            setProjectData(apiCall.data.listProjects.items)
        }
        catch (error) {
            console.log('Error getting list of projects: ', error)
        }
    }

    useEffect(() => {
        getUserProjects()
    }, [])

    return (
        <>
            <Header 
                userDetails={props.userDetails}
                userAttribs={props.userAttribs}
                isLoggedIn={props.isLoggedIn}
                setLoading={props.setLoading}
                setDestinationPage={props.setDestinationPage}          
            />
            {projectData &&
                <ProjectGrid 
                    projectData={projectData}
                    setLoading={props.setLoading}
                    setDestinationPage={props.setDestinationPage}                        
                />
            }
            <Footer /> 
        </>
    )
}

export default Home
