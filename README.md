## Introduction
Art Site (or ArtShare) is a proof of concept website intended to satisfy the needs of creators who wish to receive critique on their work as it progresses. As such, the website facilitates uploading user generated content, separated out into different "projects" and "revisions", which can be critiqued by other users.

Guest users may browse the website unauthenticated; they are able to look at user projects, profiles and comments without creating an account. One must follow the simple process of creating a user account in order to contribute, at which point the authenticated user may upload content and comment on other users' work.

When a user creates a project, they will name and describe the project as well as upload an initial revision, which is the state of their work as it currently stands, with a short title and description to go with that. Users can create many projects with many revisions. The overarching concept is similar to a sort of version control, though it's not advertised as such, as it is currently solely aimed at gathering feedback (though this could change as the project evolves). As it stands, the website supports only images in PNG format, but this is intended to be expanded to a wider range of image formats and then potentially other mediums such as audio and video.

Users can customise a user profile with personal details such as a biography, job title and location as well as custom avatar and banner images. A user's profile page will display a collection of all of the projects they have created to date.

Users of the site are able to comment per revision on other user's work to help give constructive feedback. Users can browse the different revisions of a project via an image carousel which displays the content along with its description and other user comments associated with that revision. Comments are separated per revision, such that the dialogue remains focussed on the each iteration of content.

**NOTE: The current iteration of the site is a proof of concept only and as such is only deployed in a development environment for demonstrative purposes. There are a number of improvements that need to be made to push this project to a production environment**

## Technology
- Frontend:
  - HTML5/CSS3 static components built with Bootstrap
  - Pages rendered using React.js
  - Backend access facilitated by Amazon Amplify API
- Backend:
  - Infrastructure created, updated and deployed with Amazon Amplify CLI
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

## Design choices
### Amazon Amplify
Amplify was initially chosen to simplify the development of the project, for a developer new to cloud infrastructure and deployment. Amplify appeared to provide a neat interface to a wide array of Amazon services that are essential in creating a basic CRUD app such as ArtShare. What actually transpired is a series of frustrating events that resulted in a large amount of wasted time and missed opportunities.

At a surface level, Amplify is a neat tool, as it allows one to create and deploy some simple infrastructure quickly. If one sticks absolutely to the beaten path, it works well. The Amplify documentation is pretty comprehensive and integration of the backend within the front end using the Amplify API is seamless. Just copy and paste the exemplar code, alter a few parameters and it does "just work". The integration of Amazon Cognito is great for handling users, as are S3 buckets for storing configuration/user binary content and DynamoDB for storing text data.

The issues begin to come out of the woodwork as one tries to do anything even mildly "creative". Here is a summary of the problems faced during development:

- Amplify CLI is poor - a fair few actions are prohibitive or even impossible to carry out without falling back to the console (e.g. setting up rewrites/redirects) which is really bad for automation. Something truly asinine is that some CLI commands use switches that take JSON as input, which is horrible to set up in bash, let alone a GitHub action.
- Amplify is buggy and lacking a lot of basic functionality - there are issues stemming back 2 years on GitHub issues that cover pretty simplistic functionality that still hasn't been added
- Initial setup of resources via the CLI is very manual. A user has to follow numerous prompts to set up resources, rather than using a script. This is very poor for repeatibility in the event infrastructure needs to be destroyed and spun up again
- Cyclical dependencies with Lambda triggers can lead to awkward bodges - for example using a Lambda to invoke another Lambda
- Error messages often give next to no information about problems at hand
- A lot of settings are set in stone once an app is created - this often requires apps to be completely destroyed and recreated to change basic settings e.g. manual vs automated deployment of the Amplify front end once a repository has already been connected to the service
- The Amplify automated CI/CD flow is very fragile - the Art Site front end deployment would freeze on every push, resulting in reversion to manually setup automated deployment, which required the deletion and recreation of the app
- Defaults can be nonsensical - a default setting for npm build commands lead me in circles for a few days before I realised that the build commands were Windows specific if you create your app on a Windows machine, despite the generic Linux commands working absolutely fine under Powershell/CMD

Based on even just these issues, it would be hard to recommend Amplify to anybody, even a newbie, as they would quickly outgrow the potential of the tool. It would make sense to invest the extra time learning how to interface with the utilised Amazon services manually, as the eventual result would be far more robust. Further work on this project would see Amplify replaced by a more robust approach, using perhaps a service such as Serverless to create and deploy infrastructure.

### Amazon AppSync and GraphQL
GraphQL is a tool that was stumbled upon perhaps a third of the way through development of the app, just before work on the backend started - It essentially turned what would have been a rather arduous process of manually creating the site API using Lambda and API gateway into a very speedy process - essentially one defines a schema containing "Models" that describe the data which will be utilised and any required relationships between models.

For instance, Project, Revision and Comment models were defined, with connecting fields between them which defined their relationships i.e. one project has many revisions which in turn can have many comments. The GraphQL implemtation also offers configuration of access permissions, keys which can be used to sort more advanced queries and more.

When the schema is deployed using Amplify, AWS AppSync creates all of the "queries", "mutations" and "subscriptions" required to implement the models seamlessly, which forms the basis for the CRUD app. No boilerplate required. There is perhaps an argument to say this might be an overkill approach for an application this simple, but the time savings and quality of the final implementation make it an invaluable tool. Where Amplify would be ditched in favour of a proper automation tool, the GraphQL/AppSync flow would be worth continuing to use.

### Serverless
Serverless was chosen for miscellanious resource deployment that fell outside the remit of Amplify. It offers a simple but powerful workflow for deploying cloud infrastructure such as Lambda, S3 buckets and so on.

One particular advantage leveraged during development for this project, was the automated python requirements configuration plugin. This enables the developer to include prerequisite packages for their lambda that might need to be built for a specific machine architecture. Certbot was required for this project; upon deployment of the SSL certification Lambda, Serverless will spin up a Docker container which will build the packages in Amazon Linux such that the built binaries are compatible with the hardware the Lambda will be run on in the cloud. This is a process that can be achieved using other tools, but the way in which Serverless handles it is very elegant, saving a great deal of code and time.

### GitHub Actions
GitHub Actions are used to perform continuous deployment of the Amplify front and backend environments, as well as continuous E2E testing using Cypress on every push to the development branch. As the git repository for this project is hosted on GitHub, it was a natural choice to take advantage of this powerful automation pipeline.

### Cypress
Cypress makes E2E testing incredibly easy, with extensive GUI and command line tools and diagnostics provided. The writing and integration of tests into a project is very straightforward and it was advantageous to get to develop tests in a visual desktop environment before integrating them into the automated pipeline.