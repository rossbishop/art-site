import React from 'react';
import Header from './Header'
import ProjectModule from './ProjectModule'

import projectDataImport from './ProjectDummyData'

function TestCss() {
    return (
        <>
            <Header />
            <ProjectModule 
                initialProjectDataState={(projectDataImport.length)-1}
                projectRevisionData={projectDataImport[0].revisions}
                projectDetails={projectDataImport[0]}
            />
        </>
    )
}

export default TestCss