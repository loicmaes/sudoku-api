require('dotenv').config()
const express = require('express')
const cors = require('cors')
const parser = require('body-parser')

const app = express()

app
    .use(parser)
    .use(cors())

const port = process.env.API_PORT || 3000
app.listen(port, () => {
    console.log(`API running on :`)
    console.log(`  › http://localhost:${port}/`)
    if (process.env.API_HOST)
        console.log(`   › http://${process.env.API_HOST}:${port}/`)
})
