// /* Amplify Params - DO NOT EDIT
// 	API_ARTSITE_GRAPHQLAPIENDPOINTOUTPUT
// 	API_ARTSITE_GRAPHQLAPIIDOUTPUT
// 	API_ARTSITE_PUBLICUSERPROFILETABLE_ARN
// 	API_ARTSITE_PUBLICUSERPROFILETABLE_NAME
// Amplify Params - DO NOT EDIT */

// exports.handler = async (event, context, callback) => {

//     const env = process.env.ENV
//     const functionName = 'ArtSiteAPIAmplifyCreatePublicUserProfile-' + env
//     const payload = {
//                 sub: sub,
//             }
//     lambda.invoke({
//                 FunctionName: functionName,
//                 Payload: JSON.stringify(payload)
//             }).promise().then(response0 => {
//                 console.log("Lambda with AppSync access called")
//                 const response = JSON.parse(response0.Payload)
//             })

//     //callback(null, event);

// };

// // exports.handler = (event, context, callback) => {
// //   // insert code to be executed by your lambda trigger
// //   callback(null, event);
// // };

// // exports.handler = async (event) => {
// //     // TODO implement
// //     const response = {
// //         statusCode: 200,
// //         body: JSON.stringify('Hello from Lambda!'),
// //     };
// //     return response;
// // };
