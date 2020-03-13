# React & Express Starter Pack Creation
* **Objective** - To create a React and Express project-template
* **Purpose** - To make accessible a reusble template for creating new React & Express applications.
* **Description** - This application is used to demonstrate an elegant way of connecting a front end React application to a backend Express server

## Pre requisite software
* npm cli

<hr><hr><hr>

## Instructions to Replicate this Project


### Part 1 - Dependency Management & File Infrastructure
* Create project directory
    * `mkdir reactexpress-template`
* Navigate to newly created directory
    * `mkdir reactexpress-template`
* Open in text editor
    * `code .` (_Visual Studio Code_)
* Create `server.js` file for Express server.
    * `touch server.js*`
* Create `package.json` file
    * `npm init`
        * Description - React Express Template
        * Entry Point - `server.js`
* Install Express
    * `npm i express concurrently`
* Install `nodemon`;
    * `npm i nodemon --save-dev`
        * _Runs application and watches for development so that it auto-updates upon change._

### Part 2 - Modify the `package.json` file
```
"script" : {
    "start": "node server.js",
    "server": "nodemon server.js"
}
```
* `"start" : "node server.js"` will call `node`, then call the `server.js` _entry point_
* `"server": "nodemon server.js"` will use nodemon to watch for changes.

### Part 3 - Modify the `server.js` file

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


### Part 4 - Running and Viewing the application
* To run the application, execute `npm run server`.
    * This works because of the `script` added in the `package.json`.
* Navigate to `localhost:5000/api/customers` to view the json being returned by the Express server.
* The `JSON` below is indicative of the expected render from the browser.

```javascript
[{id:1, firstName:'John',lastName:'Doe'},
{id:2, firstName:'Ischa',lastName:'Boul'},
{id:3, firstName:'Dark',lastName:'Mon'}]
```

### Part 5 - 


_This application is based on a youtube tutorial which can be found [here](https://www.youtube.com/watch?v=v0t42xBIYIs)._