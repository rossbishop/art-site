/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      projectId
      projectName
      projectDescription
      owner
      createdAt
      updatedAt
      revisions {
        items {
          revisionId
          projectConnID
          imgSrc
          name
          description
          owner
          createdAt
          updatedAt
          comments {
            items {
              commentId
              revisionConnID
              comment
              likeCount
              owner
              createdAt
              updatedAt
              likes {
                items {
                  id
                  commentConnID
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
      projectId
      projectName
      projectDescription
      owner
      createdAt
      updatedAt
      revisions {
        items {
          revisionId
          projectConnID
          imgSrc
          name
          description
          owner
          createdAt
          updatedAt
          comments {
            items {
              commentId
              revisionConnID
              comment
              likeCount
              owner
              createdAt
              updatedAt
              likes {
                items {
                  id
                  commentConnID
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
      projectId
      projectName
      projectDescription
      owner
      createdAt
      updatedAt
      revisions {
        items {
          revisionId
          projectConnID
          imgSrc
          name
          description
          owner
          createdAt
          updatedAt
          comments {
            items {
              commentId
              revisionConnID
              comment
              likeCount
              owner
              createdAt
              updatedAt
              likes {
                items {
                  id
                  commentConnID
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
      revisionId
      projectConnID
      imgSrc
      name
      description
      owner
      createdAt
      updatedAt
      comments {
        items {
          commentId
          revisionConnID
          comment
          likeCount
          owner
          createdAt
          updatedAt
          likes {
            items {
              id
              commentConnID
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
export const updateRevision = /* GraphQL */ `
  mutation UpdateRevision(
    $input: UpdateRevisionInput!
    $condition: ModelRevisionConditionInput
  ) {
    updateRevision(input: $input, condition: $condition) {
      revisionId
      projectConnID
      imgSrc
      name
      description
      owner
      createdAt
      updatedAt
      comments {
        items {
          commentId
          revisionConnID
          comment
          likeCount
          owner
          createdAt
          updatedAt
          likes {
            items {
              id
              commentConnID
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
export const deleteRevision = /* GraphQL */ `
  mutation DeleteRevision(
    $input: DeleteRevisionInput!
    $condition: ModelRevisionConditionInput
  ) {
    deleteRevision(input: $input, condition: $condition) {
      revisionId
      projectConnID
      imgSrc
      name
      description
      owner
      createdAt
      updatedAt
      comments {
        items {
          commentId
          revisionConnID
          comment
          likeCount
          owner
          createdAt
          updatedAt
          likes {
            items {
              id
              commentConnID
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      commentId
      revisionConnID
      comment
      likeCount
      owner
      createdAt
      updatedAt
      likes {
        items {
          id
          commentConnID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      commentId
      revisionConnID
      comment
      likeCount
      owner
      createdAt
      updatedAt
      likes {
        items {
          id
          commentConnID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      commentId
      revisionConnID
      comment
      likeCount
      owner
      createdAt
      updatedAt
      likes {
        items {
          id
          commentConnID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createPublicUserProfile = /* GraphQL */ `
  mutation CreatePublicUserProfile(
    $input: CreatePublicUserProfileInput!
    $condition: ModelPublicUserProfileConditionInput
  ) {
    createPublicUserProfile(input: $input, condition: $condition) {
      publicUserProfileId
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
      publicUserProfileId
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
      publicUserProfileId
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      commentConnID
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      commentConnID
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      commentConnID
      owner
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
