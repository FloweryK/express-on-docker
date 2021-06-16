/* library */
const express = require('express')
const logger = require('morgan')

/* app */
const app = express()
const port = 3000

/* middleware */
app.use(logger('dev'))

app.get('/', (req, res) => res.status(200).send('hello docker world!'))

/* listening */
app.listen(port, () => console.log(`server is listening at localhost:${port}`))