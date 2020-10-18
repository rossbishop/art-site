/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String) {
    onCreateProject(owner: $owner) {
      id
      projectName
      projectDescription
      owner
      createdAt
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
              likes {
                items {
                  id
                  commentID
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
  subscription OnUpdateProject($owner: String) {
    onUpdateProject(owner: $owner) {
      id
      projectName
      projectDescription
      owner
      createdAt
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
              likes {
                items {
                  id
                  commentID
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
  subscription OnDeleteProject($owner: String) {
    onDeleteProject(owner: $owner) {
      id
      projectName
      projectDescription
      owner
      createdAt
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
              likes {
                items {
                  id
                  commentID
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
  subscription OnCreateRevision($owner: String) {
    onCreateRevision(owner: $owner) {
      id
      projectID
      imgSrc
      name
      description
      owner
      createdAt
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
          likes {
            items {
              id
              commentID
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
  subscription OnUpdateRevision($owner: String) {
    onUpdateRevision(owner: $owner) {
      id
      projectID
      imgSrc
      name
      description
      owner
      createdAt
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
          likes {
            items {
              id
              commentID
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
  subscription OnDeleteRevision($owner: String) {
    onDeleteRevision(owner: $owner) {
      id
      projectID
      imgSrc
      name
      description
      owner
      createdAt
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
          likes {
            items {
              id
              commentID
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
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      revisionID
      comment
      likeCount
      owner
      createdAt
      updatedAt
      likes {
        items {
          id
          commentID
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
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      revisionID
      comment
      likeCount
      owner
      createdAt
      updatedAt
      likes {
        items {
          id
          commentID
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
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      revisionID
      comment
      likeCount
      owner
      createdAt
      updatedAt
      likes {
        items {
          id
          commentID
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
      id
      commentID
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
      commentID
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
      commentID
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePublicUserProfile = /* GraphQL */ `
  subscription OnCreatePublicUserProfile($owner: String) {
    onCreatePublicUserProfile(owner: $owner) {
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
export const onUpdatePublicUserProfile = /* GraphQL */ `
  subscription OnUpdatePublicUserProfile($owner: String) {
    onUpdatePublicUserProfile(owner: $owner) {
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
export const onDeletePublicUserProfile = /* GraphQL */ `
  subscription OnDeletePublicUserProfile($owner: String) {
    onDeletePublicUserProfile(owner: $owner) {
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
