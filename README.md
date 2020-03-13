# React & Express Starter Pack Creation
* **Objective** - To create a React and Express project-template
* **Purpose** - To make accessible a reusble template for creating new React & Express applications.
* **Description** - This application is used to demonstrate an elegant way of connecting a front end React application to a backend Express server

## Pre requisite software
* npm cli

<hr><hr><hr>

## Instructions to Replicate this Project


### Part 1 - Dependency Management & File Infrastructure
* Create reactexpress directory
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
    "start": "node server.js"
    "server": "nodemon server.js"
}
```
* `"start" : "node server.js"` will call `node`, then call the `server.js` _entry point_
* `"server": "nodemon server.js"` will use nodemon to watch for changes.

### Part 3 - Modify the `server.js` file

```
const express = require('express');
const app = express();
const port = 5000;
app.get('/api/customers', (req, res) => {
    const customers = [
        {id:1, firstName:'John',lastName:'Doe'}
        {id:2, firstName:'Mike',lastName:'Pel'}
        {id:3, firstName:'Dark',lastName:'Mon'}
    ];
    res.json(customers);
})

app.listen(port, () => console.log(`Server started on port ${port}`));
```

* Navigate to `localhost:5000/api/customers` to view the json being returned by the Express server



_This application is based on a youtube tutorial which can be found [here](https://www.youtube.com/watch?v=v0t42xBIYIs)._