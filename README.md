# Art Site
Website used to share, improve and critique art - See the live demo site at https://artshare.rossbishop.dev
## Introduction
Art Site (or ArtShare) is a proof of concept website intended to satisfy the needs of creators who wish to receive critique on their work as it progresses. As such, the website facilitates uploading user generated content, separated out into different "projects" and "revisions", which can be critiqued by other users.

Guest users may browse the website unauthenticated; they are able to look at user projects, profiles and comments without creating an account. One must follow the simple process of creating a user account in order to contribute, at which point the authenticated user may upload content and comment on other users' work.

When a user creates a project, they will name and describe the project as well as upload an initial revision, which is the state of their work as it currently stands, with a short title and description to go with that. Users can create many projects with many revisions. The overarching concept is similar to a sort of version control, though it's not advertised as such, as it is currently solely aimed at gathering feedback (though this could change as the project evolves). As it stands, the website supports only images in PNG format, but this is intended to be expanded to a wider range of image formats and then potentially other mediums such as audio and video.

Users can customise a user profile with personal details such as a biography, job title and location as well as custom avatar and banner images. A user's profile page will display a collection of all of the projects they have created to date.

Users of the site are able to comment per revision on other user's work to help give constructive feedback. Users can browse the different revisions of a project via an image carousel which displays the content along with its description and other user comments associated with that revision. Comments are separated per revision, such that the dialogue remains focussed on the each iteration of content.

**NOTE: The current iteration of the site is a proof of concept only and as such is only deployed in a development environment for demonstrative purposes. There are a number of improvements that need to be made to push this project to a production environment**

## Live demo site
Feel free to test any provided functionality such as user account creation, projects, comments etc. Databases are wiped and restored from a default state daily.

## Folder structure
The folder structure of the project is as follows:

- `.github/workflows` - GitHub Actions automation workflows
- `amplify/` - Amazon Amplify backend configuration (CloudFormation templates, json config, Node.js Lambda triggers)
- `certbot-setup/` - Serverless framework project which sets up an AWS Lambda function (Python 3.8) that renews an SSL certificate and stores it in Amazon S3
- `cypress/` - Automated end to end tests and fixtures
- `database-clear/` - Serverless framework project which sets up an AWS Lambda function (Python 3.8) that clears DynamoDB databases and restores from a backup
- `public/` - Static site content
- `src/` - Front end React modules, CSS and GraphQL functions

## Technology
- Frontend:
  - HTML5/CSS3 static components built with Bootstrap
  - Pages rendered using React.js
  - Backend access facilitated by Amazon Amplify API
- Backend:
  - Infrastructure created, updated and deployed with Amazon Amplify CLI (Node.js)
    - CRUD API generated from GraphQL schema by Amazon AppSync
    - User created text content (Project, revision, user profile text etc.) stored in one Amazon DynamoDB table per GraphQL model
    - User created binary content (Project revision, avatars, banner images etc.) stored in Amazon S3 bucket  
    - Front end hosting via Amplify
    - Authenticated user accounts handled by Amazon Cognito
    - Unauthenticated user accounts handled by Amazon IAM
    - Cognito Lambda trigger for handling public user profile creation at the same time a user confirms registration
  - GitHub Actions CI/CD workflow on push to dev branch
    - Syncing of updated Amplify backend environment with cloud
    - E2E testing with Cypress
    - Publishing (frontend and backend) updates via Amplify CLI
  - Miscellanious management AWS Lambda functions created and deployed with Serverless
    - Dynamic SSL cert generation using AWS Lambda and Certbot, run on monthly cadence with CloudWatch (not currently in use due to Amplify limitations)
    - Database cleansing and restoration from known good backup for development demo Amplify environment, run on daily cadence with CloudWatch (bot protection measure) 

## Working with Art Site
### Prerequisites
- Node.js/npm
- Amazon AWS CLI
- Amazon Amplify CLI
- Cypress
- Serverless

### Clone repository, switch to dev branch
`git clone https://github.com/rossbishop/art-site`
`git checkout dev`

### Build project locally
`npm run-script build`

### Run automated dev branch pipeline
`git push origin dev` - actions will run remotely:

- Clones repository 
- Installs prerequisites
- Pulls Amplify environment from cloud
- Runs E2E tests
- Publishes Amplify environment (frontend and backend)
- Deploys serverless functions

### Sync Amplify with cloud locally
`./amplify-init-pull.sh`

or, manually following prompts:

`amplify init`
`amplify pull`

### Push Amplify backend locally
`amplify push`

### Push Amplify frontend and backend locally
`./amplify-publish.sh`

or, manually following prompts:

`amplify publish`

### Deploy serverless functions locally
#### To deploy certificate lambda 
`cd certbot-setup`
`serverless deploy`

#### To deploy database clearance function 
`cd database-clear`
`serverless deploy`

### Running Cypress tests locally
#### To run all tests without GUI:
`npm start` in one command line
`npx cypress run` in another command line once server is running

#### To open cypress GUI and selectively run tests:
`npm start` in one command line
`npx cypress open` in another command line once server is running