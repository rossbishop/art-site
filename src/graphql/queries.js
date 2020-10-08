/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      userID
      userName
      projectName
      projectDescription
      createdOn
      updatedOn
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        userName
        projectName
        projectDescription
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getRevision = /* GraphQL */ `
  query GetRevision($id: ID!) {
    getRevision(id: $id) {
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
export const listRevisions = /* GraphQL */ `
  query ListRevisions(
    $filter: ModelRevisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRevisions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
