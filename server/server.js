const port = 3001;
const express = require('express');
const cors = require('cors');
const app = require('express')();
const session = require('express-session');
const { json } = require('body-parser');
const massive = require('massive');
const config = require('./config.js');
const masterRoutes = require('./masterRoutes');
const serverCtrl = require('./serverCtrl.js')


app.use(json())
app.use(cors());
app.use(session(config.session))


app.use("/", express.static(__dirname + '/public'))
massive(config.postgres).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('db connected')
})

app.get('/api/getProducts', serverCtrl.getProducts)


app.listen(port, () => {
    console.log(`Arc Fab listening on port: ${port}`)
})
