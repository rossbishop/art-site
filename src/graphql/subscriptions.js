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
          imgFile {
            bucket
            region
            key
          }
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
          imgFile {
            bucket
            region
            key
          }
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
          imgFile {
            bucket
            region
            key
          }
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
export const onCreateRevision = /* GraphQL */ `
  subscription OnCreateRevision {
    onCreateRevision {
      id
      projectID
      imgSrc
      name
      description
      owner
      createdAt
      contentType
      imgFile {
        bucket
        region
        key
      }
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
export const onUpdateRevision = /* GraphQL */ `
  subscription OnUpdateRevision {
    onUpdateRevision {
      id
      projectID
      imgSrc
      name
      description
      owner
      createdAt
      contentType
      imgFile {
        bucket
        region
        key
      }
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
export const onDeleteRevision = /* GraphQL */ `
  subscription OnDeleteRevision {
    onDeleteRevision {
      id
      projectID
      imgSrc
      name
      description
      owner
      createdAt
      contentType
      imgFile {
        bucket
        region
        key
      }
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreatePublicUserProfile = /* GraphQL */ `
  subscription OnCreatePublicUserProfile {
    onCreatePublicUserProfile {
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
  subscription OnUpdatePublicUserProfile {
    onUpdatePublicUserProfile {
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
  subscription OnDeletePublicUserProfile {
    onDeletePublicUserProfile {
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
