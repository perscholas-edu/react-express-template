# React & Express Starter Pack Creation
* **Objective** - To create a React and Express project-template
* **Purpose** - To make accessible a reusble template for creating new React & Express applications.
* **Description** - This application is used to demonstrate an elegant way of connecting a front end React application to a backend Express server

## Pre requisite software
* npm cli

<hr><hr><hr>
<br><br><br>

## Instructions to Replicate this Project

## Part 1 - Creating the Backend Application

### Part 1.1 - Dependency Management & File Infrastructure
* Create project directory
    * `mkdir reactexpress-template`
* Navigate to newly created directory
    * `mkdir reactexpress-template`
* Open in text editor
    * `code .` (_Visual Studio Code_)
* Create `server.js` file for Express server.
    * `touch server.js`
* Create `package.json` file
    * `npm init`
        * Description - React Express Template
        * Entry Point - `server.js`
* Install Express
    * `npm i express concurrently`
* Install `nodemon`;
    * `npm i nodemon --save-dev`
        * _Runs application and watches for development so that it auto-updates upon change._

### Part 1.2 - Modify the `package.json` file
```
"script" : {
    "start": "node server.js",
    "server": "nodemon server.js"
}
```
* `"start" : "node server.js"` will call `node`, then call the `server.js` _entry point_
* `"server": "nodemon server.js"` will use nodemon to watch for changes.

### Part 1.3 - Modify the `server.js` file

```javascript
const express = require('express');  // import express
const app = express(); // initialize express
const port = 5000; // create port variable to listen on
const funcToRunUponListening = () => console.log(`Server started on port ${port}`);
const funcToRunUponReceivingRequest = (req, res) => {
    const customers = [ // TODO - replace with call to Database
        {id:1, firstName:'John',lastName:'Doe'},
        {id:2, firstName:'Ischa',lastName:'Boul'},
        {id:3, firstName:'Dark',lastName:'Mon'}
    ];
    res.json(customers);
};

app.get('/api/customers', funcToRunUponReceivingRequest)
app.listen(port, funcToRunUponListening);
```


### Part 1.4 - Running Server and _Hitting_ Endpoint
* To run the application, execute `npm run server`.
    * This works because of the `script` added in the `package.json`.
* Navigate to `localhost:5000/api/customers` to view the json being returned by the Express server.
* The `JSON` below is indicative of the expected render from the browser.

```JSON
[{id:1, firstName:'John',lastName:'Doe'},
{id:2, firstName:'Ischa',lastName:'Boul'},
{id:3, firstName:'Dark',lastName:'Mon'}]
```

<hr><hr>
<br><br><br>


## Part 2 - Creating the Frontend Application

### Part 2.1 - Install `create-react-app` command line operation
* `npm i -g create-react-app`
    * 

### Part 2.2 - Create React application
* `create-react-app client`
    * generates a new React application in a directory named `client`.


### Part 2.3 - Modify `client/package.json`

```JSON
"scripts" : {
    ...
},
"proxy": "http://localhost:5000"
```


* allows us to make requests to backend without having to include full URL in fetch request
    * Enables expressions like `fetch('/api/customers')`
    * Eliminates redundant uri usage like `fetch('http://localhost:5000/api/customers')`



### Part 2.4 - Running React Server
* `cd client`
* `npm start`
    * runs application on localhost:3000

### Part 2.5 - Creating Customers component
* Create `client/components/customers/customers.js`
* Create `client/components/customers/customers.css`


_This application is based on a youtube tutorial which can be found [here](https://www.youtube.com/watch?v=v0t42xBIYIs)._