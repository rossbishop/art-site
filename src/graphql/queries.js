/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      projectName
      projectDescription
      owner
      createdOn
      updatedOn
      revisions {
        items {
          id
          projectID
          imgSrc
          name
          description
          owner
          createdOn
          updatedOn
          comments {
            items {
              id
              revisionID
              comment
              likeCount
              owner
              createdOn
              updatedOn
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
        createdOn
        updatedOn
        revisions {
          items {
            id
            projectID
            imgSrc
            name
            description
            owner
            createdOn
            updatedOn
            comments {
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
      createdOn
      updatedOn
      comments {
        items {
          id
          revisionID
          comment
          likeCount
          owner
          createdOn
          updatedOn
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
        createdOn
        updatedOn
        comments {
          items {
            id
            revisionID
            comment
            likeCount
            owner
            createdOn
            updatedOn
            likes {
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
      createdOn
      updatedOn
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
        createdOn
        updatedOn
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
