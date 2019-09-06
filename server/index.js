require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const {PORT_CONNECTION, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(dbInst => {
    app.set("db", dbInst);
})
.catch(err => console.log(err));

app.use(express.json());



app.listen(PORT_CONNECTION, () => {
    console.log(`Listening on port ${PORT_CONNECTION}`)
})