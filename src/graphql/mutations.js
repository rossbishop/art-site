/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      projectName
      projectDescription
      owner
      createdAt
      contentType
      updatedAt
      revisions {
        items {
          id
          projectID
          imgSrc
          name
          description
          owner
          createdAt
          contentType
          updatedAt
          comments {
            items {
              id
              revisionID
              comment
              likeCount
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
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
      projectName
      projectDescription
      owner
      createdAt
      contentType
      updatedAt
      revisions {
        items {
          id
          projectID
          imgSrc
          name
          description
          owner
          createdAt
          contentType
          updatedAt
          comments {
            items {
              id
              revisionID
              comment
              likeCount
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
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
      projectName
      projectDescription
      owner
      createdAt
      contentType
      updatedAt
      revisions {
        items {
          id
          projectID
          imgSrc
          name
          description
          owner
          createdAt
          contentType
          updatedAt
          comments {
            items {
              id
              revisionID
              comment
              likeCount
              owner
              createdAt
              updatedAt
            }
            nextToken
          }
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
      owner
      createdAt
      contentType
      updatedAt
      comments {
        items {
          id
          revisionID
          comment
          likeCount
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
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
      owner
      createdAt
      contentType
      updatedAt
      comments {
        items {
          id
          revisionID
          comment
          likeCount
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
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
      owner
      createdAt
      contentType
      updatedAt
      comments {
        items {
          id
          revisionID
          comment
          likeCount
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      revisionID
      comment
      likeCount
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      revisionID
      comment
      likeCount
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      revisionID
      comment
      likeCount
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createPublicUserProfile = /* GraphQL */ `
  mutation CreatePublicUserProfile(
    $input: CreatePublicUserProfileInput!
    $condition: ModelPublicUserProfileConditionInput
  ) {
    createPublicUserProfile(input: $input, condition: $condition) {
      id
      owner
      username
      position
      location
      bio
      instagram
      twitter
      facebook
      avatarImg
      createdAt
      updatedAt
    }
  }
`;
export const updatePublicUserProfile = /* GraphQL */ `
  mutation UpdatePublicUserProfile(
    $input: UpdatePublicUserProfileInput!
    $condition: ModelPublicUserProfileConditionInput
  ) {
    updatePublicUserProfile(input: $input, condition: $condition) {
      id
      owner
      username
      position
      location
      bio
      instagram
      twitter
      facebook
      avatarImg
      createdAt
      updatedAt
    }
  }
`;
export const deletePublicUserProfile = /* GraphQL */ `
  mutation DeletePublicUserProfile(
    $input: DeletePublicUserProfileInput!
    $condition: ModelPublicUserProfileConditionInput
  ) {
    deletePublicUserProfile(input: $input, condition: $condition) {
      id
      owner
      username
      position
      location
      bio
      instagram
      twitter
      facebook
      avatarImg
      createdAt
      updatedAt
    }
  }
`;
export const createPlaceHolder = /* GraphQL */ `
  mutation CreatePlaceHolder(
    $input: CreatePlaceHolderInput!
    $condition: ModelPlaceHolderConditionInput
  ) {
    createPlaceHolder(input: $input, condition: $condition) {
      id
      placeHolderID
      createdAt
      updatedAt
    }
  }
`;
export const updatePlaceHolder = /* GraphQL */ `
  mutation UpdatePlaceHolder(
    $input: UpdatePlaceHolderInput!
    $condition: ModelPlaceHolderConditionInput
  ) {
    updatePlaceHolder(input: $input, condition: $condition) {
      id
      placeHolderID
      createdAt
      updatedAt
    }
  }
`;
export const deletePlaceHolder = /* GraphQL */ `
  mutation DeletePlaceHolder(
    $input: DeletePlaceHolderInput!
    $condition: ModelPlaceHolderConditionInput
  ) {
    deletePlaceHolder(input: $input, condition: $condition) {
      id
      placeHolderID
      createdAt
      updatedAt
    }
  }
`;
