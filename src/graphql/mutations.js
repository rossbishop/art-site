/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      userID
      userName
      projectName
      projectDescription
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      userID
      userName
      projectName
      projectDescription
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      userID
      userName
      projectName
      projectDescription
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
export const createRevision = /* GraphQL */ `
  mutation CreateRevision(
    $input: CreateRevisionInput!
    $condition: ModelRevisionConditionInput
  ) {
    createRevision(input: $input, condition: $condition) {
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
export const updateRevision = /* GraphQL */ `
  mutation UpdateRevision(
    $input: UpdateRevisionInput!
    $condition: ModelRevisionConditionInput
  ) {
    updateRevision(input: $input, condition: $condition) {
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
export const deleteRevision = /* GraphQL */ `
  mutation DeleteRevision(
    $input: DeleteRevisionInput!
    $condition: ModelRevisionConditionInput
  ) {
    deleteRevision(input: $input, condition: $condition) {
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
