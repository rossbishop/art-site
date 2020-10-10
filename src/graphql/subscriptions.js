/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String) {
    onCreateProject(owner: $owner) {
      id
      userID
      projectName
      projectDescription
      owner
      createdOn
      updatedOn
      revisions {
        items {
          id
          projectID
          imgSrc
          name
          description
          createdOn
          updatedOn
        }
        nextToken
      }
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String) {
    onUpdateProject(owner: $owner) {
      id
      userID
      projectName
      projectDescription
      owner
      createdOn
      updatedOn
      revisions {
        items {
          id
          projectID
          imgSrc
          name
          description
          createdOn
          updatedOn
        }
        nextToken
      }
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String) {
    onDeleteProject(owner: $owner) {
      id
      userID
      projectName
      projectDescription
      owner
      createdOn
      updatedOn
      revisions {
        items {
          id
          projectID
          imgSrc
          name
          description
          createdOn
          updatedOn
        }
        nextToken
      }
    }
  }
`;
export const onCreateRevision = /* GraphQL */ `
  subscription OnCreateRevision($owner: String) {
    onCreateRevision(owner: $owner) {
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
  subscription OnUpdateRevision($owner: String) {
    onUpdateRevision(owner: $owner) {
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
  subscription OnDeleteRevision($owner: String) {
    onDeleteRevision(owner: $owner) {
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
