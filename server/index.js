require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const {PORT_CONNECTION, CONNECTION_STRING} = process.env;
const controller = require('./Controllers/controller');

massive(CONNECTION_STRING)
.then(dbInst => {
    app.set("db", dbInst);
})
.catch(err => console.log(err));

app.use(express.json());

app.get('/api/inventory', controller.getProducts)
app.post('/api/inventory', controller.createProduct)
app.put('api/inventory:id', controller.editItem)
app.delete('/api/inventory/:id', controller.deleteProduct)

app.listen(PORT_CONNECTION, () => {
    console.log(`Listening on port ${PORT_CONNECTION}`)
})