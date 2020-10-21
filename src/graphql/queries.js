/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlaceHolder = /* GraphQL */ `
  query GetPlaceHolder($id: ID!) {
    getPlaceHolder(id: $id) {
      id
      placeHolderID
      createdAt
      updatedAt
    }
  }
`;
export const listPlaceHolders = /* GraphQL */ `
  query ListPlaceHolders(
    $filter: ModelPlaceHolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaceHolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        placeHolderID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($projectId: ID!, $createdAt: AWSDateTime!) {
    getProject(projectId: $projectId, createdAt: $createdAt) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $projectId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjects(
      projectId: $projectId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const projectByOwnerByDate = /* GraphQL */ `
  query ProjectByOwnerByDate(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectByOwnerByDate(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getRevision = /* GraphQL */ `
  query GetRevision($revisionId: ID!) {
    getRevision(revisionId: $revisionId) {
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
export const listRevisions = /* GraphQL */ `
  query ListRevisions(
    $revisionId: ID
    $filter: ModelRevisionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRevisions(
      revisionId: $revisionId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
`;
export const revisionByProjectByDate = /* GraphQL */ `
  query RevisionByProjectByDate(
    $projectConnID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRevisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    revisionByProjectByDate(
      projectConnID: $projectConnID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const getComment = /* GraphQL */ `
  query GetComment($commentId: ID!) {
    getComment(commentId: $commentId) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $commentId: ID
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      commentId: $commentId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
`;
export const commentByRevisionByDate = /* GraphQL */ `
  query CommentByRevisionByDate(
    $revisionConnID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentByRevisionByDate(
      revisionConnID: $revisionConnID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const getPublicUserProfile = /* GraphQL */ `
  query GetPublicUserProfile($publicUserProfileId: ID!) {
    getPublicUserProfile(publicUserProfileId: $publicUserProfileId) {
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
export const listPublicUserProfiles = /* GraphQL */ `
  query ListPublicUserProfiles(
    $publicUserProfileId: ID
    $filter: ModelPublicUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPublicUserProfiles(
      publicUserProfileId: $publicUserProfileId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const publicUserProfileByUser = /* GraphQL */ `
  query PublicUserProfileByUser(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPublicUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    publicUserProfileByUser(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      commentConnID
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
