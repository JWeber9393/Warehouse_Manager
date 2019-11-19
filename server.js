const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public/dist/public"))
app.use(express.json())

require('./server/routes')(app)

const port = 8000
app.listen(port, () => console.log(`Listening on port ${port}`))