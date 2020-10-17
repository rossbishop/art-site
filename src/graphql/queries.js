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
      nextToken
    }
  }
`;
export const projectByOwnerByDate = /* GraphQL */ `
  query ProjectByOwnerByDate(
    $owner: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectByOwnerByDate(
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
`;
export const revisionByProjectByDate = /* GraphQL */ `
  query RevisionByProjectByDate(
    $projectID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRevisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    revisionByProjectByDate(
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
`;
export const commentByRevisionByDate = /* GraphQL */ `
  query CommentByRevisionByDate(
    $revisionID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentByRevisionByDate(
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
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      commentID
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
        commentID
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
