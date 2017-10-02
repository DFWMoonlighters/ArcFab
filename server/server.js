const app = require('express')();
const session = require('express-session');
const { json } = require('body-parser');
const massive = require('massive');
const massive = require('massive');
const massive = require('massive');


app.use(json())
app.use(session(config.session))


app.use("/", express.static(__dirname + '/public'))
massive(config.postgres).then(dbInstance => {
    app.set('db', dbInstance)
})

app.listen(port, () => {
    console.log(`Arc Fab listening on port: ${port}`)
})