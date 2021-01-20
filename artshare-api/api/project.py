# import the JSON Python library for working with incoming and outgoing data
import json
# import AWS Python library
import boto3
# import date/time Python libraries for recording the time project is created
from time import gmtime, strftime
# import uuid Python library for storing ids against projects
import uuid
import re, string

# create cognito client
cognitoClient = boto3.client('cognito-idp')
# create dynamoDB object
dynamodb = boto3.resource('dynamodb', region_name='eu-west-2')
# select table from dynamoDB object
table = dynamodb.Table('ArtShare-Projects')
# store the current time in a human readable format in a variable
now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())

def checkToken(accessToken):
    try:
        response = cognitoClient.get_user(
            AccessToken=accessToken
        )
        return response
    except cognitoClient.exceptions.ResourceNotFoundException as error:
        return error.__dict__
    except cognitoClient.exceptions.InvalidParameterException as error:
        return error.__dict__
    except cognitoClient.exceptions.NotAuthorizedException as error:
        return error.__dict__
    except cognitoClient.exceptions.TooManyRequestsException as error:
        return error.__dict__  
    except cognitoClient.exceptions.PasswordResetRequiredException as error:
        return error.__dict__  
    except cognitoClient.exceptions.UserNotFoundException as error:
        return error.__dict__        
    except cognitoClient.exceptions.UserNotConfirmedException as error:
        return error.__dict__
    except cognitoClient.exceptions.InternalErrorException as error:
        return error.__dict__

def responseError(error):
    return {
        'isBase64Encoded': "false",
        'statusCode': error['response']['ResponseMetadata']['HTTPStatusCode'],
        'headers':{
            "Content-Type": "application/json"
        },
        'body': json.dumps(error['response'])
    }

# create a new user project
def create(event, context):
    # Check whether access token is valid and therefore allowed to post
    user = checkToken(event['headers']['Authorization'])
    # If an error is returned, simply return it
    if "response" in user:
        return responseError(user)
    # Otherwise put the requested item in the database
    else:
        requestData = json.loads(event['body'])
        id = uuid.uuid4()
        owner = user['Username']
        projectName = requestData['projectName']
        projectDescription = requestData['projectDescription']
        contentType = "project"
        createdAt = now
        updatedAt = now
        
        response = table.put_item(
            Item={
                'id': str(id),
                'owner': owner,
                'projectName': projectName,
                'projectDescription': projectDescription,
                'contentType': contentType,
                'createdAt': createdAt,
                'updatedAt': updatedAt
            })
        return {
            'isBase64Encoded': "false",
            'statusCode': 200,
            'headers':{
                "Content-Type": "application/json"
            },
            'body': str(id)
        }

# read existing user project
def read(event, context):
    # Check whether access token is valid and therefore allowed to read
    #user = checkToken(event['queryStringParameters']['accessToken'])
    #user = checkToken(event['headers']['Authorization'])
    # If an error is returned, simply return it
    #if "response" in user:
    #    return responseError(user)
    #else:

    response = table.get_item(
        TableName=tableName,
        Key={'id':str(event['pathParameters']['id'])}
    )
    return {
        'isBase64Encoded': "false",
        'statusCode': 200,
        'headers':{
            "Content-Type": "application/json"
        },
        'body': json.dumps(response['Item'])
    }    

# update existing user project
def update(event, context):
    # Check whether access token is valid and therefore allowed to update
    #user = checkToken(event['queryStringParameters']['accessToken'])
    user = checkToken(event['headers']['Authorization'])
    # If an error is returned, simply return it
    if "response" in user:
        return responseError(user)
    # Otherwise, check whether the user owns the requested item or not
    else:
        requestData = json.loads(event['body'])
        # First get the project
        response = table.get_item(
            TableName=tableName,
            Key={'id':str(event['pathParameters']['id'])}
        )
    
        # Then check the owner name is the same as that in the access token
        if response['Item']['owner'] == user['Username']:
            # Make the desired changes
            response = table.update_item(
                TableName=tableName,
                Key={'id':str(event['pathParameters']['id'])},
                UpdateExpression="set projectName = :pn, projectDescription = :pd, updatedAt = :t",
                ExpressionAttributeValues={
                    ':pn': requestData['projectName'],
                    ':pd': requestData['projectDescription'],
                    ':t': now
                },
                ReturnValues="UPDATED_NEW"
            )
            return {
                'isBase64Encoded': "false",
                'statusCode': 200,
                'headers':{
                    "Content-Type": "application/json"
                },
                'body': json.dumps(response)
            }   
        else:
            return {
                'isBase64Encoded': "false",
                'statusCode': 401,
                'headers':{
                    "Content-Type": "application/json"
                },
                'body': "You do not have permission to modify this resource"
            }

def delete(event, context):
    # Check whether access token is valid and therefore allowed to update
    #user = checkToken(event['accessToken'])
    user = checkToken(event['headers']['Authorization'])
    # If an error is returned, simply return it
    if "response" in user:
        return responseError(user)
    # Otherwise, check whether the user owns the requested item or not
    else:
        # First get the project
        response = table.get_item(
            TableName=tableName,
            Key={'id':str(event['pathParameters']['id'])}
        )
        # Then check the owner name is the same as that in the access token
        if response['Item']['owner'] == user['Username']:
            # Make the deletion
            response = table.delete_item(
                TableName=tableName,
                Key={'id':str(event['pathParameters']['id'])}
            )
            return {
                'isBase64Encoded': "false",
                'statusCode': 200,
                'headers':{
                    "Content-Type": "application/json"
                },
                'body': json.dumps(response)
            }
        else:
            return {
                'isBase64Encoded': "false",
                'statusCode': 401,
                'headers':{
                    "Content-Type": "application/json"
                },
                'body': "You do not have permission to modify this resource"
            }   