/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const projectsByUserByDate = /* GraphQL */ `
  query ProjectsByUserByDate(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByUserByDate(
      owner: $owner
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const projectsByDate = /* GraphQL */ `
  query ProjectsByDate(
    $contentType: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByDate(
      contentType: $contentType
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
`;
export const revisionsByProjectByDate = /* GraphQL */ `
  query RevisionsByProjectByDate(
    $projectID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRevisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    revisionsByProjectByDate(
      projectID: $projectID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const commentsByRevisionByDate = /* GraphQL */ `
  query CommentsByRevisionByDate(
    $revisionID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByRevisionByDate(
      revisionID: $revisionID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
`;
export const getPublicUserProfile = /* GraphQL */ `
  query GetPublicUserProfile($id: ID!) {
    getPublicUserProfile(id: $id) {
      id
      owner
      username
      position
      location
      bio
      instagram
      twitter
      facebook
      avatarImgFile {
        bucket
        region
        key
      }
      bannerImgFile {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPublicUserProfiles = /* GraphQL */ `
  query ListPublicUserProfiles(
    $filter: ModelPublicUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        username
        position
        location
        bio
        instagram
        twitter
        facebook
        avatarImgFile {
          bucket
          region
          key
        }
        bannerImgFile {
          bucket
          region
          key
        }
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
        id
        owner
        username
        position
        location
        bio
        instagram
        twitter
        facebook
        avatarImgFile {
          bucket
          region
          key
        }
        bannerImgFile {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
