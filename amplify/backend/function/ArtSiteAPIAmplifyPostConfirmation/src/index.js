/* Amplify Params - DO NOT EDIT
	API_ARTSITE_GRAPHQLAPIENDPOINTOUTPUT
	API_ARTSITE_GRAPHQLAPIIDOUTPUT
	API_ARTSITE_PUBLICUSERPROFILETABLE_ARN
	API_ARTSITE_PUBLICUSERPROFILETABLE_NAME
Amplify Params - DO NOT EDIT */

/*
  this file will loop through all js modules which are uploaded to the lambda resource,
  provided that the file names (without extension) are included in the "MODULES" env variable.
  "MODULES" is a comma-delimmited string.
*/

var AWS = require('aws-sdk');
AWS.config.region = 'eu-west-2';
var lambda = new AWS.Lambda();

exports.handler = async (event, context, callback) => {
    
    const env = process.env.ENV
    const functionName = 'ArtSiteAPIAmplifyCreatePublicUserProfile-' + env
    var lambdaReturn = null
    console.log("PAYLOAD!!!!!!!!: " + JSON.stringify(event))
    await lambda.invoke({
                FunctionName: functionName,
                Payload: JSON.stringify(event)
            }).promise().then(response0 => {
                console.log("Lambda with AppSync access called")
                lambdaReturn = JSON.parse(response0.Payload)
            })
    const response = {
        statusCode: 201,
        body: lambdaReturn,
    };
    return response;
    
};

// exports.handler = (event, context, callback) => {
//   const modules = process.env.MODULES.split(',');
//   for (let i = 0; i < modules.length; i += 1) {
//     const { handler } = require(`./${modules[i]}`);
//     handler(event, context, callback);
//   }
// };
