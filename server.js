const express = require('express');  // import express
const app = express(); // initialize express
const port = 5000; // create port variable to listen on
const funcToRunUponListening = () => console.log(`Server started on port ${port}`);
const funcToRunUponReceivingRequest = (req, res) => {
    const customers = [ // TODO - replace with call to Database
        {id:1, firstName:'John',lastName:'Doe'},
        {id:2, firstName:'Ischa',lastName:'Boul'},
        {id:3, firstName:'Dark',lastName:'Mon'}];
        
    res.json(customers);
};

app.get('/api/customers', funcToRunUponReceivingRequest)
app.listen(port, funcToRunUponListening);