const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('hola')
})

app.listen(3000, () => {
    console.log('server ready')
})