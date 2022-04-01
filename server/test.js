const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Server läuft')
})

app.get('/hashtags', (req, res) => {
    res.status(200).json(HashTags)
})

app.post('/hashtags', (req, res) => {
    const newHashtag = req.body.name
    console.log(req.body)
    if (!HashTags.includes(newHashtag)) {
        HashTags.push(newHashtag)
        res.status(200).json({ message: 'hashtag added' }).send()
    }
})

app.listen(port, () => {
    console.log('Test läuft on ', port)
})
