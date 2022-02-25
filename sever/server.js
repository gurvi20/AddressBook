'use strict'
const express = require('express')
const cors=require('cors')

const fileWriter = require('./fileWriter')
const app = express()
const PORT = 3002
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'

app.use(cors())
app.use(express.static('./Public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/readAllContacts', fileWriter.readFrom)
app.post('/addToContacts',fileWriter.saveTo)
// app.delete('/deleteFromPlaylist/:trackId',databaseHandler.deleteFromPlaylist)

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})