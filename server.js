const express = require('express')
const app = express()
const port = process.argv[2] || 8080

app.use(express.static('public'))

app.listen(port, function () {
    console.log(`listening on port ${port}`)
})