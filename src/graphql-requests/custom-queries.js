
export const createRevisionOnProject = /* GraphQL */ `
    mutation CreateRevisionOnProject(
        $input: CreateRevisionOnProjectInput!
        $condition: ModelRevisionConditionInput
    ) {
        createRevision(input: $input, condition: $condition) {
            
        }
    }
`;

// mutation CreateRevisionOnProject {
//     createRevision(input: { imgSrc: "http://imgur.com/", name: "A revision", description: "Rev Desc", projectID: "431123e4-9658-4385-9d23-2b26a19e9d5d"}) {
//         id
//         projectID
//         imgSrc
//         name
//         description
//         createdOn
//         updatedOn
//     }
// }

// query GetProjectAndRevisions {
//     getProject(id: "431123e4-9658-4385-9d23-2b26a19e9d5d") {
//         id
//         projectDescription
//         projectName
//         userID
//         revisions {
//             items {
//                 id
//                 projectID
//                 imgSrc
//                 name
//                 description
//             }
//         }
//     }
// }
