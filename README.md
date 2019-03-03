## Prerequisites
1) node
2) npm
3) react
4) git

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Setup
1) Clone the project using 
#### `git clone`

2) Install all the application dependencies, by traversing into the application directory and running
#### `npm install`

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>

#### `npm test`

Launches the test runner in the interactive watch mode.<br>

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Folder Structure
- bin
- client
- config
- scripts
- uploads
- .eslintignore
- .eslintrc.js
- .gitignore
- package.json

### ./bin
  This folder contains the main app (app.js) file which is started when you runu npm start
  The app will run on default `$PORT 8080`
  You can also run the app on a separate port by 
  `export PORT=2020`
  writing this line on your terminal. Then the app will start on the provided PORT number

### ./client
  This folder has the following things
  #### build 
   This folder holds the build file that will be generated when you run `npm run build`
  
  #### src
   This the source folder that contains all the files for the build.

  #### actions
  This folder consist action creators
  
  #### components
  This folder consist of all the common components
  
  #### helpers
  This folder consist of validations, ComponentStyles, contant, endpoints and util

  #### reducers
  This folder consist of the reducer logic for managing state

  #### routers
  These consist of the component routers

  #### store
  Contains the store file 
  #### views
  This folder contains the view component for the user
  This folder consist of UserComponent that imports
  UserForm and UserTable

  #### index.js
  The start file for the react application
### ./config
  This fodler consist of all the webpack configurations, mongo config env and paths
### ./scripts
  This folder consist of the react app build and start scripts
### ./server
  This folder consist of the backend express server application, it contains 
  - routes : This folder consist of the app routes
  - controllers : This folder consist of the buusuness logic for the routes
  - models : This folder consist for db schemas
  - test : This folder consist of the test files
  - utils : This folder consist helpers 
  - server.js : This is the express application that is being used in ./bin/app.js to serve the server
### ./uploads
This folder holds the uploaded images