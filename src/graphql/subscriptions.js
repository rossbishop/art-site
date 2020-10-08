/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      userID
      projectName
      projectDescription
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      userID
      projectName
      projectDescription
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      userID
      projectName
      projectDescription
      createdOn
      updatedOn
    }
  }
`;
export const onCreateRevision = /* GraphQL */ `
  subscription OnCreateRevision {
    onCreateRevision {
      id
      projectID
      imgSrc
      name
      description
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateRevision = /* GraphQL */ `
  subscription OnUpdateRevision {
    onUpdateRevision {
      id
      projectID
      imgSrc
      name
      description
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteRevision = /* GraphQL */ `
  subscription OnDeleteRevision {
    onDeleteRevision {
      id
      projectID
      imgSrc
      name
      description
      createdOn
      updatedOn
    }
  }
`;
