const port = 3001;
const express = require('express');
const app = require('express')();
const session = require('express-session');
const { json } = require('body-parser');
const massive = require('massive');
const config = require('./config.js');
const masterRoutes = require('./masterRoutes');


app.use(json())
app.use(session(config.session))

massive(config.postgres)
    .then(instance => {
        app.set('db', instance)
    })
    .catch( err => {
        console.log( err )
    })

app.use("/", express.static(__dirname + '/public'))

masterRoutes( app )

app.listen(port, () => {
    console.log(`Arc Fab listening on port: ${port}`)
})

