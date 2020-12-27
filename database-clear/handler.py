import json
import boto3
import time
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    # Create boto3 dynamodb resource
    dynamodb = boto3.resource('dynamodb', endpoint_url="http://localhost:8000")

    # Create boto3 dynamodb client
    dynamodbClient = boto3.client('dynamodb')

    # Query list of all tables and store in var
    tablesExist = dynamodbClient.list_tables()
    
    # Set up temp strings to populate with table names
    projectTableString = ""
    revisionTableString = ""
    commentTableString = ""

    # Loop throgh list of table names and store each desired table in temp variable as they are found
    for table in tablesExist["TableNames"]:
        if table.split('-')[0] == "Project":
            projectTableString = table
        elif table.split('-')[0] == "Revision":
            revisionTableString = table
        elif table.split('-')[0] == "Comment":
            commentTableString = table

    # Store table data for restoration
    projectTableDescription = dynamodbClient.describe_table(
        TableName = projectTableString
    )
    
    projectGSIs=[]
    for GSI in projectTableDescription["Table"]["GlobalSecondaryIndexes"]:
        projectGSIs.append({
                'IndexName': GSI["IndexName"],
                'KeySchema': GSI["KeySchema"],
                'Projection':GSI["Projection"],
            })
    
    revisionTableDescription = dynamodbClient.describe_table(
        TableName = revisionTableString
    )
    
    revisionGSIs=[]
    for GSI in revisionTableDescription["Table"]["GlobalSecondaryIndexes"]:
        revisionGSIs.append({
                'IndexName': GSI["IndexName"],
                'KeySchema': GSI["KeySchema"],
                'Projection':GSI["Projection"],
            })    
    
    commentTableDescription = dynamodbClient.describe_table(
        TableName = commentTableString
    )
    
    commentGSIs=[]
    for GSI in commentTableDescription["Table"]["GlobalSecondaryIndexes"]:
        commentGSIs.append({
                'IndexName': GSI["IndexName"],
                'KeySchema': GSI["KeySchema"],
                'Projection':GSI["Projection"],
            })    

    # Setup deletion status dict
    tablesDeleted = {
        "project":False,
        "revision":False,
        "comment":False
    }
    
    # Initiate table deletions
    dynamodbClient.delete_table(
        TableName=projectTableString    
    )
    dynamodbClient.delete_table(
        TableName=revisionTableString    
    )
    dynamodbClient.delete_table(
        TableName=commentTableString    
    )    
    
    # Poll to see if all database tables are deleted
    while not((tablesDeleted["project"] == True) and (tablesDeleted["revision"] == True) and (tablesDeleted["comment"] == True)):
        try:
            if tablesDeleted["project"] == False:
                dynamodbClient.describe_table(
                    TableName=projectTableString    
                )
                print("Project table not deleted")
            elif tablesDeleted["revision"] == False:
                dynamodbClient.describe_table(
                    TableName=revisionTableString    
                )
                print("Revision table not deleted")
            elif tablesDeleted["comment"] == False:
                dynamodbClient.describe_table(
                    TableName=commentTableString    
                )
                print("Comment table not deleted")
            else: 
                ("All tables deleted")
        except ClientError as ce:
            if ce.response['Error']['Code'] == 'ResourceNotFoundException':
                removedTableName = ce.response['Error']['Message'].split(":")[2].split(" ")[1]
                if removedTableName == projectTableString:
                    tablesDeleted["project"] = True
                    print("Project table deleted")
                elif removedTableName == revisionTableString:
                    tablesDeleted["revision"] = True
                    print("Revision table deleted")
                elif removedTableName == commentTableString:
                    tablesDeleted["comment"] = True
                    print("Comment table deleted")
                time.sleep(0.01)
                
    print("Existing tables deleted")

    print("Starting table restoration")
    dynamodbClient.restore_table_from_backup(
        TargetTableName=projectTableString,
        BackupArn='arn:aws:dynamodb:eu-west-2:381257970460:table/Project-qahekpx6dbcwnhlrizcgf7zbmy-dev/backup/01607881349958-b81cf496',
        BillingModeOverride='PAY_PER_REQUEST',
        GlobalSecondaryIndexOverride=projectGSIs
    )
    
    dynamodbClient.restore_table_from_backup(
        TargetTableName=revisionTableString,
        BackupArn='arn:aws:dynamodb:eu-west-2:381257970460:table/Revision-qahekpx6dbcwnhlrizcgf7zbmy-dev/backup/01607881341645-7e996adf',
        BillingModeOverride='PAY_PER_REQUEST',
        GlobalSecondaryIndexOverride=revisionGSIs
    )
        
    dynamodbClient.restore_table_from_backup(
        TargetTableName=commentTableString,
        BackupArn='arn:aws:dynamodb:eu-west-2:381257970460:table/Comment-qahekpx6dbcwnhlrizcgf7zbmy-dev/backup/01607881357988-61352e16',
        BillingModeOverride='PAY_PER_REQUEST',
        GlobalSecondaryIndexOverride=commentGSIs
    )
    
    print("Operation complete")