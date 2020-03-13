const express = require('express');
const app = express();
const port = 5000;
app.get('/api/customers', (req, res) => {
    const customers = [
        {id:1, firstName:'John',lastName:'Doe'},
        {id:2, firstName:'Mike',lastName:'Pel'},
        {id:3, firstName:'Dark',lastName:'Mon'}
    ];
    res.json(customers);
});

app.listen(port, () => console.log(`Server started on port ${port}`));