/* Amplify Params - DO NOT EDIT
	API_ARTSITE_GRAPHQLAPIENDPOINTOUTPUT
	API_ARTSITE_GRAPHQLAPIIDOUTPUT
	API_ARTSITE_PUBLICUSERPROFILETABLE_ARN
	API_ARTSITE_PUBLICUSERPROFILETABLE_NAME
Amplify Params - DO NOT EDIT */

var aws = require('aws-sdk');
var ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});

exports.handler = async (event, context) => {
    // TODO implement
    console.log(event);

    let date = new Date();

    const tableName = process.env.API_ARTSITE_PUBLICUSERPROFILETABLE_NAME;
    const region = process.env.REGION;
    //const defaultAvi = 'https://YOUR/DEFAULT/IMAGE';
    
    console.log("table=" + tableName + " -- region=" + region);

    aws.config.update({region: region});

    // If the required parameters are present, proceed
    if (event.request.userAttributes.sub) {

        // -- Write data to DDB
        let ddbParams = {
            Item: {
                'publicUserProfileId': {S: event.request.userAttributes.sub},
                'owner': {S: event.userName},
                'username': {S: event.userName},
                'position': {S: ''},
                'location': {S: ''},
                'bio': {S: ''},
                'instagram': {S: ''},
                'twitter': {S: ''},
                'facebook': {S: ''},
                'avatarImg': {S: ''},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: tableName
        };

        // Call DynamoDB
        try {
            await ddb.putItem(ddbParams).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DDB or SQS");
        context.done(null, event);
    }
};
