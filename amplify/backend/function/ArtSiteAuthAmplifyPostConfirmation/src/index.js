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
    context.done(null, event)
    
};