/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlaceHolder = /* GraphQL */ `
  subscription OnCreatePlaceHolder {
    onCreatePlaceHolder {
      id
      placeHolderID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlaceHolder = /* GraphQL */ `
  subscription OnUpdatePlaceHolder {
    onUpdatePlaceHolder {
      id
      placeHolderID
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlaceHolder = /* GraphQL */ `
  subscription OnDeletePlaceHolder {
    onDeletePlaceHolder {
      id
      placeHolderID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateRevision = /* GraphQL */ `
  subscription OnCreateRevision {
    onCreateRevision {
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
export const onUpdateRevision = /* GraphQL */ `
  subscription OnUpdateRevision {
    onUpdateRevision {
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
export const onDeleteRevision = /* GraphQL */ `
  subscription OnDeleteRevision {
    onDeleteRevision {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreatePublicUserProfile = /* GraphQL */ `
  subscription OnCreatePublicUserProfile {
    onCreatePublicUserProfile {
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
export const onUpdatePublicUserProfile = /* GraphQL */ `
  subscription OnUpdatePublicUserProfile {
    onUpdatePublicUserProfile {
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
export const onDeletePublicUserProfile = /* GraphQL */ `
  subscription OnDeletePublicUserProfile {
    onDeletePublicUserProfile {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
      id
      commentConnID
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String) {
    onUpdateLike(owner: $owner) {
      id
      commentConnID
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String) {
    onDeleteLike(owner: $owner) {
      id
      commentConnID
      owner
      createdAt
      updatedAt
    }
  }
`;
