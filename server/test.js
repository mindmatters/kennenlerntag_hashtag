const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const HashTags = [
    'Blubb',
    'Blafasel',
    'trööt',
    'weissnich',
    'Irgendwas',
    'Wasneues',
    'JenniferMalt',
    'JenniferBastelt',
    'JenniferChillt',
]

app.use(cors())

app.get('/', (req, res) => {
    res.send('Server läuft')
})

app.get('/hashtags', (req, res) => {
    res.status(200).json(HashTags)
})

app.listen(port, () => {
    console.log('Test läuft on ', port)
})
